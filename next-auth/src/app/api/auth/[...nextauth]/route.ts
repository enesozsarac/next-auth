import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import type { JWT } from "next-auth/jwt";
import type { User, Account, Profile, AuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },

  callbacks: {
    async jwt(params: {
      token: JWT;
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile;
      trigger?: "signIn" | "signUp" | "update";
      isNewUser?: boolean;
      session?: any;
    }) {
      const { token, user, account } = params;

      if (account && user) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
