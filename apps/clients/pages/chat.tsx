import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export default function Chat() {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const sendPrompt = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setAnswer(data.text);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chat with AI</h1>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="border w-full" />
      <Button onClick={sendPrompt} className="mt-2">Send</Button>
      <motion.pre
        className="mt-4 bg-gray-100 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {answer}
      </motion.pre>
    </div>
  );
}
