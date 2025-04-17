import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    //signIn allows users to sign in with their credentials
    //signOut allows users to sign out of their account
    //auth allows access to session data within our components
    providers: [Google],
})
