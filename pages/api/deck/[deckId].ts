// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getDeckById(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.body;

  try {
    const deck = await prisma.deck.findUnique({
      where: {
        id: id
      },
      include: {
        characters:true
      },
    })
    res.status(200).json(deck)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}