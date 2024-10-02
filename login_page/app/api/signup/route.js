import connectToDatabase from '@/app/lib/MongoDB'; // Adjust based on your file structure

import  User  from '@/app/models/User';
import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";

export async function POST(req) {
    try{
        const {email,password}=await req.json();
        console.log("Email: ",email);
        console.log("Password: ",password);
        const hashedPass= await bcrypt.hash(password,10);
        await connectToDatabase();
        await User.create({email,password: hashedPass });
        return NextResponse.json({ message: 'user registerd.'},{ status:201});
    }catch(err){
        return NextResponse.json(
            { message: 'Error occured.'}
            ,{ status: 500});

    }
}