// GET - getting data
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import { error } from "console";


// GET request
export async function GET() {
   const users = await  prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request: NextResponse){
    const body = await request.json();
    // once we read the body of the request
    // check if the request is validate or not if invalid reuturn 400
    // Else , return 
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json( validation.error.errors , { status: 400})

    const user = await prisma.user.findUnique({
        where:{email: body.email}
    })

    if(user){
        return NextResponse.json({ error: 'User already exists'}, {status:400})
    }

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        }
    })
    return NextResponse.json(newUser, { status: 201});
    
}