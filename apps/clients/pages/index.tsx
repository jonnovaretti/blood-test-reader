import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Blood Test Reader</h1>
      <nav className="mt-4 flex gap-4">
        <Link href="/signup">Sign Up</Link>
        <Link href="/account">Account</Link>
        <Link href="/chat">Chat</Link>
      </nav>
    </main>
  );
}
