// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('auth-token'); // Add session management later

  if (!token && req.nextUrl.pathname === '/checkout') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout', '/profile'], // Protect these routes
};
