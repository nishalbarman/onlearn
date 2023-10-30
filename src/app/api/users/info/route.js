import getDataFromToken from "@/helper/getDataFromToken";
import User from "@/model/userModel";
import { NextResponse } from "next/server";

const { connect } = require("@/dbConfig/dbConfig");

connect();

export async function GET(request) {
  try {
    const userId = getDataFromToken(request);
    const userData = await User.findOne({ _id: userId });
    if (!userData) {
      return NextResponse.json({ error: "No user!" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
