import { signIn } from 'next-auth/react';
import { Button } from '../components/ui/button';

export default function SignUp() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Sign Up</h1>
      <Button onClick={() => signIn('google')} className="block mb-2">Sign in with Google</Button>
      <Button onClick={() => signIn('facebook')} className="block mb-2">Sign in with Facebook</Button>
      <Button onClick={() => signIn('instagram')} className="block mb-2">Sign in with Instagram</Button>
    </div>
  );
}
