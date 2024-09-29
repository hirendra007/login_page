import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <navbar>
      <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
      </navbar>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page for the Next.js app.</p>
    </div>
  );
}
