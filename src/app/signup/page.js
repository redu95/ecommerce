// src/app/signup/page.js
"use client";

import { useRouter } from 'next/navigation'; // App Router uses next/navigation
import { useState } from 'react';
import Link from 'next/link';


export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Use router from next/navigation

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    // Basic password confirmation check
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('auth-token', 'some-random-token'); 
        router.push('/'); // Redirect to home after successful sign-up
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
    console.log("Sign up with Google clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-8 rounded-lg shadow-md space-y-4 w-96"
      >
        <h1 className="text-2xl font-bold text-black">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder='Name'
          className="w-full px-4 py-2 text-black border round-md"
          value ={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 text-black border rounded-md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md"
        >
          Sign Up
        </button>

        {/* Already have an account? Log in */}
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>

        <div class="flex items-center justify-center my-6">
          <div class="border-t border-gray-300 flex-grow"></div>
          <span class="px-2 text-gray-500">Or</span>
          <div class="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Sign up with Google button */}
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
          Sign Up with Google
        </button>
      </form>
    </div>
  );
}
