import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSONBody = await req.json();
  let username = JSONBody["user"];
  let password = JSONBody["password"];

  if (username === "ABC" && password === "123") {
    const payload = { username: username };
    const key = new TextEncoder().encode(process.env.JWT_KEY);
    let token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer("http://localhost:3000")
      .setExpirationTime("2h")
      .sign(key);
   return NextResponse.json(
      { status: "Valide", message: "Login Success", token: token },
      { status: 200 }
    );
  } else {
   return NextResponse.json(
      { status: "fail", message: "Invalide User" },
      { status: 401 }
    );
  }
}
