// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getAllCharacters(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const characters = await prisma.character.findMany({
      include: {
        deck: true
      }
    })
    res.status(200).json(characters)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}