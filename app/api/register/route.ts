import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: { json: () => any }) {
  const body = await request.json();
  const { name, email, password } = body.data;
  console.log(body.data);

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email or password", { status: 400 });
  }
  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userExists) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashPassword,
    },
  });
  return NextResponse.json(user), { status: 201 };
}
