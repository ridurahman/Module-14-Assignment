import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CreateToken } from "@/app/utility/JWTHelper";

//Checking otp, if correct then creating token with email and setting this token as cookie
export async function POST(req, res) {
  //Taking request body data vToken for matching with otp and email to create token
  const JSON = await req.json();
  let vToken = JSON["token"];
  let email = JSON["email"];
  if (vToken === "1234" && email==="example@gmail.com") {
    let token = await CreateToken(email);
    return NextResponse.json(
      {
        status: true,
        message: "Login Success",
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${token}; Max-Age=72000; Secure; HttpOnly; Path=/; SameSite=Strict`,
        },
      }
    );
  } else {
    return NextResponse.json({ status: false, message: "Login Failed" });
  }
}

// If user requests to logout, then deleting his token stored as cookie
export async function GET(req, res) {
  cookies().delete("token");
  return NextResponse.json({
    status: true,
    message: "Logout Success",
  });
}
