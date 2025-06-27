import { signIn } from 'next-auth/react';

export default function SignUp() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Sign Up</h1>
      <button onClick={() => signIn('google')} className="block mb-2">Sign in with Google</button>
      <button onClick={() => signIn('facebook')} className="block mb-2">Sign in with Facebook</button>
      <button onClick={() => signIn('instagram') } className="block mb-2">Sign in with Instagram</button>
    </div>
  );
}
