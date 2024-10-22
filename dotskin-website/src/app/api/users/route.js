// src/app/api/users/route.js

import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const data = await request.json();
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        role: "customer", // Default role
      },
    });

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
    });
  }
}
