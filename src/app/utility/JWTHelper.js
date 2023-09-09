import { SignJWT, jwtVerify } from "jose";
export async function CreateToken(email) {
  const secret = new TextEncoder().encode("123-XYZ");
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("example.com")
    .setExpirationTime("2h")
    .sign(secret);
  return token;
}

export async function VerifyToken(token) {
  const secret = new TextEncoder().encode("123-XYZ");
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
  b;
}
