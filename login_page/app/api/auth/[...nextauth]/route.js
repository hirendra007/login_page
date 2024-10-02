import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '@/app/lib/MongoDB';
import bcrypt from 'bcryptjs';
import User  from '@/app/models/User';
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
  
        const { email, password } = credentials;
        try{
          await connectMongo();
          const user=await User.findOne({email});
          if(!user){
            return null;
          }
          const passMatch=await bcrypt.compare(password,user.password);
          if(!passMatch){
            return null;
          }
          return user;
        }catch(err){
          console.log('Error:',err);
        }
      }
    })
  ],
  session:{
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/' // Custom login page
  }
};

const handler=NextAuth(authOptions);
export { handler as GET, handler as POST};
