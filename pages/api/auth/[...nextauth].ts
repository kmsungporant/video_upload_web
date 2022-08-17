import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credential",
      credentials: {
        SpecialKey: {
          label: "SpecialKey",
          type: "text",
          placeholder: "SpecialKey",
        },
      },
      authorize: (credentials) => {
        if (credentials?.SpecialKey === process.env.SPECIAL_KEY) {
          return {
            id: 2,
            name: "login",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
  },
});
