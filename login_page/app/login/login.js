'use client';
import { useState,useEffect } from 'react';
import Link from 'next/link';
import styles from './login.module.css';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!email || !password || (!isLogin && !confirmPassword)) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Reset error on valid submission
    setError('');
    
    // Process login or signup here
    console.log(`${isLogin ? 'Login' : 'Signup'} submitted:`, { email, password });
  };
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  return (
    <div className={styles.backgroundVideo}>
      {isClient && (
        <video autoPlay muted loop className={styles.video}>
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className={styles.content}>
      <form onSubmit={handleSubmit} className="bg-none border-gray-50 shadow-none rounded px-8 pt-6 pb-8 mb-4 ">
        <h2 className="text-2xl text-white font-bold mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>

        {!isLogin && (
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
          </div>
        )}
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            {isLogin ? 'Sign Up instead?' : 'Login instead?'}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
