import NextAuth, { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import prisma, { UserMembershipType } from "@repo/db/client";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
	providers: [
		// Gmail Authentication
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Email and password are required");
				}

				// Find user in database
				const user = await prisma.user.findFirst({
					where: { email: credentials.email },
					select: {
						id: true,
						email: true,
						emailVerified: true,
						password: true,
						membershipType: true,
						firstname: true,
						lastname: true,
						leadingChapterId: true,
						leadingClubId: true,
						businessDetails: {
							select: {
								id: true, // Fetching businessDetails.id
							},
						},
						createdAt: true,
					},
				});

				if (!user) {
					throw new Error("No user found with this email");
				}

				// Verify password
				const isValidPassword = await bcrypt.compare(
					credentials.password,
					user.password
				);
				if (!isValidPassword) {
					throw new Error("Invalid password");
				}

				return {
					...user, // Ensure personalDetailsId is set
					businessDetailsId: user.businessDetails?.id || null, // Ensure businessDetailsId is set
				};
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			// Check if user already exists in the database
			const existingUser = await prisma.user.findUnique({
				where: {
					email: user.email!,
				},
			});

			// If user doesn't exist, create a new record
			if (!existingUser) {
				return "/register";
			}

			return true;
		},
		async redirect({ baseUrl }) {
			return baseUrl + "/login";
		},
		async jwt({ token, user }) {
			// Add user information to the token
			if (user && user.email) {
				const res = await prisma.user.findFirst({
					where: { email: user.email },
					select: {
						id: true,
						membershipType: true,
						firstname: true,
						lastname: true,
						leadingChapterId: true,
						leadingClubId: true,
						businessDetails: {
							select: {
								id: true,
							},
						},
					},
				});
				token.firstname = res?.firstname;
				token.lastname = res?.lastname;
				token.id = res?.id;
				token.membershipType = res?.membershipType;
				token.businessDetailsId = res?.businessDetails?.id || null;
				token.leadingChapterId = res?.leadingChapterId || null;
				token.leadingClubId = res?.leadingClubId || null;
			}
			return token;
		},

		async session({ session, token }: { session: Session; token: JWT }) {
			if (session.user && token) {
				session.user.firstname = token.firstname as string;
				session.user.lastname = token.lastname as string;
				session.user.id = token.id as string;
				session.user.leadingChapterId = token.leadingChapterId as string;
				session.user.leadingClubId = token.leadingClubId as string;
				session.user.membershipType =
					token.membershipType as UserMembershipType;
				session.user.businessDetailsId = token.businessDetailsId as
					| string
					| null;
			}
			return session;
		},
	},

	secret: process.env.NEXTAUTH_SECRET!,
	pages: {
		signIn: "/login",
	},
};

export default NextAuth(authOptions);
