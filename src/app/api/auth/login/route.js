// src/app/api/auth/login/route.js
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  try {

    console.log('here')
    const client = await clientPromise;
    const db = client.db('shopcart');
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
    response.cookies.set('auth-token', 'some-random-token', { httpOnly: true, maxAge: 60 * 60 * 24 }); // 1 day
    console.log('response: ', response)

    return response;

    //=====================================================================

    // const client = await clientPromise;
    // const db = client.db('shopcart');
    // const existingUser = await db.collection('users').findOne({ email });

    // if (existingUser) {
    //   return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);
    // await db.collection('users').insertOne({ email, password: hashedPassword });

    // return NextResponse.json({ message: 'Registration successful!' }, { status: 201 });

    //=====================================================================
  } catch (error) {
    console.log("error", error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
