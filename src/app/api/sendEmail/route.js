import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "mail.teamrabbil.com",
            host: 'smtpro.zoho.in',
            port: 25,
            secure: true,
            auth: {
                user: "info@teamrabbil.com",
                // pass: process.env.NEXT_PUBLIC_PASSWORD
                pass: "~sR4[bhaC[Qs"
            }
        })

        const mailOption = {
            from: "Test Email from Next js Application<info@teamrabbil.com>",
            to: 'delowar@gmail.com',
            subject: "Test Email from Next js Application",
            text:"Test Email from Next js Application",
            html: `
        <h3>Hello</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 401 })
    }
}