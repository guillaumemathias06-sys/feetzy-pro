import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const { auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        const email=(creds?.email||"").toString().toLowerCase();
        const user=await prisma.user.findUnique({ where:{ email } });
        if(!user) return null;
        const ok=await bcrypt.compare((creds?.password||"").toString(), user.password);
        if(!ok) return null;
        return { id:user.id, email:user.email, name:user.name, role:user.role, areaId:user.areaId };
      }
    })
  ],
  callbacks:{
    async jwt({ token, user }) {
      if(user){ token.role=(user as any).role; token.areaId=(user as any).areaId||null; }
      return token;
    },
    async session({ session, token }) {
      (session as any).user.role=token.role; (session as any).user.areaId=token.areaId; return session;
    }
  }
});
