import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export default function getDataFromToken(request) {
  try {
    const token = request.cookies.get("token") || "";
    const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedData.id;
  } catch (error) {
    throw new Error(error.message);
  }
}
