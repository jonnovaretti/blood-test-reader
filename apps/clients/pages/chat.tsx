import { useState } from 'react';

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
      <button onClick={sendPrompt} className="mt-2 px-2 py-1 bg-blue-500 text-white">Send</button>
      <pre className="mt-4 bg-gray-100 p-2">{answer}</pre>
    </div>
  );
}
