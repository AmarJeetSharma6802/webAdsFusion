import jwt from "jsonwebtoken";
import signInUser from "../model/signIn.model";
import { NextResponse } from "next/server";

export async function authUser(req) {
  try {
    const token =
      req.cookies.get("accessToken")?.value ||
      req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return {
        error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
      };
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    if (!decoded) {
      return {
        error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
      };
    }
    const user = await signInUser
      .findById(decoded.user_id)
      .select("-password -refreshToken -__v");

    if (!user) {
      return {
        error: NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        ),
      };
    }

    return { user };
  } catch (error) {
    return {
      error: NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      ),
    };
  }
}
