import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });
    const stream = OpenAIStream(completion);
    return StreamingTextResponse(stream, res);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
