import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req,res,next) {

    if (req.nextUrl.pathname.startsWith('/api/Profile')) {

        try {
            const reqHeaders = new Headers(req.headers);
            const Token = reqHeaders.get('Token');
            const key = new TextEncoder().encode(process.env.JWT_KEY);
            const decodedString = jwtVerify(Token,key);
            const unsename = decodedString['payload']['username'];
            reqHeaders.set('username', unsename);
            return NextResponse.next({
                request:{headers: reqHeaders}
            });
            
        } catch (error) {
            return NextResponse.json(
                { status: "fail", message: "Invalide User" },
                { status: 401 }
              );
        }
    
    }
    

};