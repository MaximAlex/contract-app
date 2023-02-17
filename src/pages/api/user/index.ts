// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TUser } from '@/types/user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<TUser>>) {
  res.status(200).json([{ id: "1", name: 'John Doe' }, { id: "2", name: 'dsds Doe' }])
}
