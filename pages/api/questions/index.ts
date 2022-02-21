// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { questions } from '../../../utils/questions'
import { Questions } from '../../../utils/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Questions>>
) {
  if (req.method === 'GET') {
    res.status(200).json(questions)
  }
  if (req.method === 'POST') {
    res.status(200).json({name: 'teste'})
  }
}
