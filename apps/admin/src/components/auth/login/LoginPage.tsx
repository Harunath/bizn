"use client";

import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { AdminRole } from "@repo/db/client";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { data: session } = useSession();
	useEffect(() => {
		console.log(session);
		if (session && session.user) {
			switch (session.user.role) {
				case AdminRole.ADMIN:
					router.push("/admin/dashboard");
					break;
				case AdminRole.MASTER_ADMIN:
					router.push("/master-franchise/dashboard");
					break;
				case AdminRole.SUPER_ADMIN:
					router.push("/super-franchise/dashboard");
					break;
				case AdminRole.REGIONAL_ADMIN:
					router.push("/regional-franchise/dashboard");
					break;
				case AdminRole.GUEST:
					router.push("/guest/dashboard");
					break;
				default:
					logOut();
					break;
			}
		}
	});
	const logOut = async () => {
		await signOut({ redirect: false });
	};
	const handleGoogleSignIn = async () => {
		setLoading(true);
		try {
			await signIn("google", { callbackUrl: "/login" });
		} catch (error) {
			console.error("Google sign-in failed: ", error);
			setError("Google sign-in failed.");
		} finally {
			setLoading(false);
		}
	};

	const handleCredentialsSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		const result = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		if (result?.error) {
			setError(result.error);
		} else {
			router.push("/dashboard");
		}
		setLoading(false);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

				{error && <p className="text-red-500 text-center">{error}</p>}

				<button
					onClick={handleGoogleSignIn}
					className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 mb-4"
					disabled={loading}>
					<FcGoogle className="text-2xl" />
					{loading ? "Signing in..." : "Continue with Google"}
				</button>

				<div className="relative my-4 text-center">
					<span className="bg-white px-2 text-gray-500">or</span>
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-300"></div>
					</div>
				</div>

				<form onSubmit={handleCredentialsSignIn} className="space-y-4">
					<input
						type="email"
						placeholder="Email"
						className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute inset-y-0 right-3 flex items-center text-gray-500">
							{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
						</button>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
						disabled={loading}>
						{loading ? "Signing in..." : "Sign In"}
					</button>
				</form>
				<p className=" text-sm">
					dont have an account?{" "}
					<Link className="text-red-600" href="/register">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}
