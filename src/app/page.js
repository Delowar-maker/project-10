"use client"
// import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        message
      })
    })
    console.log(await response.json())
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-red-200">
      <form onSubmit={sendMail} className="h-full w-1/3 space-y-6">
        <div className="flex flex-col items-start w-full justify-start">
          <h1 className="text-xl font-semibold">Authentication, Token Handling, and Email Integration in a Next.js Application Email</h1>
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            Email
          </label>
          <input
            name="title"
            type="text"
            id="title"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            placeholder="Enter your email address"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-light text-gray-500">
            Password
          </label>
          <input
            name="title"
            type="password"
            id="description"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            placeholder="Enter your password"
            className="rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <button type='submit' className="ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
          <span>Submit</span>
        </button>
      </form>
    </main>
  )
}
