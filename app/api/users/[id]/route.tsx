import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetach data from a db
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  //  If data not found retrun 404
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate the request body
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id)},
  })
  // If dones not exist, return 404
  if (!user) {
    return NextResponse.json({ error: "User not Found" }, { status: 404 });
  }
  const updatedUser = await prisma.user.update({
    where: { id: user.id},
    data: {
      name: body.name,
      email: body.email,
    }
  })
  return NextResponse.json(updatedUser);
  //  Update the  user
  // Return the updated user
}



export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // If dones not exist, return 404
  if (params.id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }
  return NextResponse.json({});
}
