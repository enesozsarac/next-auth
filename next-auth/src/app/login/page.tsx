"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => signIn("auth0",{callbackUrl: "/mainpage"})}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Login with Auth0
      </button>
    </div>
  );
}
