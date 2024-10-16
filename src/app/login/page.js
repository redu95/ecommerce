// src/app/login/page.js
"use client";

import { useRouter } from 'next/navigation'; // App Router uses next/navigation
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Use router from next/navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('auth-token', 'some-random-token');
        router.push('/'); // Redirect to home after successful login
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong');
      console.log('here')
    }
  };

  const handleGoogleSignUp = () => {
    // Google sign-up logic here
    console.log("Login with Google clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md space-y-4 w-96"
      >
        <h1 className="text-2xl font-bold text-black">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 text-black border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 text-black border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md"
        >
          Login
        </button>

        {/* Doesn't have an account yet? Sign up */}
        <p className="text-center text-gray-600">
        Does not have an account yet?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
        <div class="flex items-center justify-center my-6">
          <div class="border-t border-gray-300 flex-grow"></div>
          <span class="px-2 text-gray-500">Or</span>
          <div class="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* log in with Google button */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center bg-white-600 text-black border border-black-300 py-2 rounded-md mt-4"
        >
          <img
            src="/images/google-logo-.png"  // Path to your Google PNG file
            alt="Google Icon"
            className="w-5 h-5 mr-2"       // Add custom width, height, and margin
          />
          Log in with Google
        </button>
      </form>
    </div>
  );
}
