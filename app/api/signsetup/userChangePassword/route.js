import { NextResponse } from "next/server.js";
import DBconnect from "../../Db/DBconnect";
import signInUser from "../../model/signIn.model.js";
import bcrypt from "bcryptjs";
import { authUser } from "../../middleware/auth.middleware.js";

export async function POST(req) {

    await DBconnect()
  const { user, error } =await authUser(req);
  if (error) {
    return error;
  }

  if (user.provider === "google") {
      return NextResponse.json({
        message: "Google accounts cannot change password",
      }, { status: 403 });
    }

  const { password, confirmPassword, newPassword } = await req.json();

  if ((!password, !confirmPassword, !newPassword)) {
    return NextResponse.json({ message: "all fields are required" });
  }

  if(password !== confirmPassword){
    return NextResponse.json({message:"password and confirmPssword do not match"},{status:404})
  }
  const User = await signInUser.findById(user?._id);

  if (!User) {
    return NextResponse.json({ message: "user not found " },{status:401});
  }

  const matchPassword = await bcrypt.compare(password, User.password);

  if (!matchPassword) {
    return NextResponse.json(
      { message: "Old password is incorrect" },
      { status: 401 }
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  User.password = hashedPassword;
  await User.save({ validateBeforeSave: false });
  return NextResponse.json(
    { message: "Password changed successfully",User },
    { status: 200 }
  );
}
