// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getAllDecks(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const decks = await prisma.deck.findMany({
    })
    res.status(200).json(decks)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}