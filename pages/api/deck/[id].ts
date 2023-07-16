// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getDeckById(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query;

  try {
    const deck = await prisma.deck.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        characters:true
      },
    })
    res.status(200).json(deck)
  } catch (error) {
    console.log(`Error: ${error}`)
    res.status(500).send({ error: "An error occurred while fetching the deck." }) // Send back an error response
  }
}