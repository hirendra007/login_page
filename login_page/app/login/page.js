'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const router = useRouter(); // App Router for navigation
  const [isClient, setIsClient] = useState(false); // For hydration avoidance

  useEffect(() => {
    // Ensure client-side rendering to avoid hydration mismatch
    setIsClient(true);
  }, []);

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

    if (isLogin) {
      // Simulate login and redirect to dashboard
      console.log('Logging in:', { email, password });
      router.push('/dashboard');
    } else {
      // Simulate signup
      console.log('Signing up:', { email, password });
    }
  };

  // Only render the form after the client has mounted
  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.backgroundVideo}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <div className='absolute -inset-0.5 bg-white rounded-lg blur '></div>
        <form onSubmit={handleSubmit} className="relative justify-evenly bg-black border-gray-10 shadow-none rounded-2xl px-8 pt-4 pb-8 backdrop-blur-sm ">
          <h2 className="text-2xl text-white font-bold mb-6 pt-10">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm your password"
              />
            </div>
          )}
          
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex items-center justify-evenly pt-4 pb-7">
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
              {isLogin ? 'Sign Up?' : 'Login?'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
