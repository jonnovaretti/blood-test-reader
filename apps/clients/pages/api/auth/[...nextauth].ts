import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import InstagramProvider from 'next-auth/providers/instagram';

export default NextAuth({
  providers: [
    GoogleProvider({ clientId: process.env.GOOGLE_ID!, clientSecret: process.env.GOOGLE_SECRET! }),
    FacebookProvider({ clientId: process.env.FACEBOOK_ID!, clientSecret: process.env.FACEBOOK_SECRET! }),
    InstagramProvider({ clientId: process.env.INSTAGRAM_ID!, clientSecret: process.env.INSTAGRAM_SECRET! }),
  ],
});
