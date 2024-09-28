import {Login} from './login/login';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
      <Login/>
      </main>
    </div>
  );
}
