import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// This function take email from request body and sends a mail to that email using nodemailer
export async function POST(req, res) {
  // const { searchParams } = new URL(req.url);
  // let toEmail = searchParams.get("email");
  const JSON = await req.json();
  let toEmail = JSON["email"];
  let token = "1234";
  //let password = JSON["password"];
  let transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  let myEmail = {
    from: "Test Email From Next JS Application<info@teamrabbil.com>",
    to: toEmail,
    subject: "Test Email From Next JS Application",
    text: `Varification Code For Entering This Next JS Application Is: ${token}`,
  };

  try {
    let result = await transporter.sendMail(myEmail);
    return NextResponse.json({ status: true, msg: result, token: token });
  } catch (e) {
    return NextResponse.json({ msg: "Failed " });
  }
}
