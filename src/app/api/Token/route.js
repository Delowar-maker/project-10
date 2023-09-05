import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";
export async function GET(req, res) {
    const key = new TextEncoder().encode(process.env.JWT_KEY);
    const payload = {email:"Abc@Abc.com",user_id:"Abc123"}

    let token = await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setIssuer("http://localhost:3000")
    .setExpirationTime('2h')
    .sign(key)
    return NextResponse.json({token:token})

}



export async function POST(req, res) {

    const JsonBody = await req.json();
    const Token = JsonBody['token'];

    const Key = TextEncoder().encode(process.env.JWT_KEY);
    const decoded = await jwtVerify(Token,Key)

    return NextResponse.json(decoded)
}