import User from "@/model/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    const user = await User.findOne({
      verifyToken: token,
    });

    if (!user) {
      return NextResponse.json({ status: false, message: "Invalid Token!" });
    }

    if (user.verifyTokenExpiry < Date.now()) {
      return NextResponse.json({ status: false, message: "Token Expired!" });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();
    return NextResponse.json({ status: true, message: "Account Verified" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
