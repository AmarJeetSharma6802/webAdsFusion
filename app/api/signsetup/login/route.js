import DBconnect from "@/app/api/Db/DBconnect.js";
import { NextResponse } from "next/server";
import signInUser from "@/app/api/model/signIn.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await DBconnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const user = await signInUser.findOne({ email });

  if (!user) {
    return NextResponse.json(
      { message: "User does not exist" },
      { status: 401 }
    );
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    return NextResponse.json(
      { message: "User password does not match" },
      { status: 401 }
    );
  }

  const accessToken = jwt.sign(
    { user_id: user._id, email: user.email },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(
    { user_id: user._id, email: user.email },
    process.env.REFRESH_TOKEN,
    { expiresIn: "5d" }
  );

  user.refreshToken = refreshToken;
  await user.save();

  const response = NextResponse.json(
    {
      message: "Login successful",
      user: { name: user.name, email: user.email },
      accessToken,
      refreshToken,
    },
    { status: 200 }
  );

  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  response.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return response;
}
