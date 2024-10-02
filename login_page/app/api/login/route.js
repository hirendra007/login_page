import connectToDatabase from '@/app/lib/MongoDB'; // Adjust based on your file structure
import User from '@/app/models/User';
import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";

export async function POST(req) {
    try{
        await connectToDatabase();
        const {email,password}=await req.json();
        const user= await User.findOne({email}).select("_id");
        console.log("user: ",user);
        return NextResponse.json({user});
    }catch(err){
        return NextResponse.json(
            { message: 'Error occured.'}
            ,{ status: 500});

    }
}