import NextAuth, { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import prisma, { AdminRole } from "@repo/db/client";
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
				const admin = await prisma.administrator.findFirst({
					where: { email: credentials.email },
					select: {
						id: true,
						email: true,
						emailVerified: true,
						password: true,
						role: true,
						firstname: true,
						lastname: true,
						parentAdminId: true,
						masterFranchises: {
							select: {
								id: true,
							},
						},
						createdAt: true,
					},
				});

				if (!admin) {
					throw new Error("No user found with this email");
				}

				// Verify password
				const isValidPassword = await bcrypt.compare(
					credentials.password,
					admin.password
				);
				if (!isValidPassword) {
					throw new Error("Invalid password");
				}
				const masterFranchiseIds = admin.masterFranchises.map((mf) => mf.id);
				return {
					...admin, // Ensure personalDetailsId is set
					masterFranchisesIds: masterFranchiseIds || null, // Ensure businessDetailsId is set
				};
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			// Check if user already exists in the database
			const existingUser = await prisma.administrator.findUnique({
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
		async jwt({ token, user, trigger, session }) {
			if (trigger === "update" && session?.role && session.parentAdminId) {
				token.role = session.role;
				token.parentAdminId = session.parentAdminId;
			}
			// Add user information to the token
			if (user && user.email) {
				const res = await prisma.administrator.findFirst({
					where: { email: user.email },
					select: {
						id: true,
						role: true,
						email: true,
						firstname: true,
						lastname: true,
						parentAdminId: true,
						masterFranchises: {
							select: {
								id: true,
							},
						},
					},
				});
				const masterFranchiseIds = res?.masterFranchises.map((mf) => mf.id);
				token.id = res?.id;
				token.role = res?.role;
				token.email = res?.email;
				token.firstname = res?.firstname;
				token.lastname = res?.lastname;
				token.parentAdminId = res?.parentAdminId;
				token.masterFranchisesIds = masterFranchiseIds || null;
			}
			return token;
		},

		async session({ session, token }: { session: Session; token: JWT }) {
			if (session.user && token) {
				session.user.id = token.id as string;
				session.user.email = token.email as string;
				session.user.firstname = token.firstname as string;
				session.user.lastname = token.lastname as string;
				session.user.role = token.role as AdminRole;
				session.user.parentAdminId = token.parentAdminId as string;
				session.user.masterFranchisesIds =
					token.masterFranchisesIds as string[];
			}
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	secret: process.env.NEXTAUTH_SECRET!,
};

export default NextAuth(authOptions);
