import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google-cloud/generative-ai';

const model = new GoogleGenerativeAI();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;
  try {
    const result = await model.predictText({ prompt });
    res.status(200).json({ text: result.text });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
