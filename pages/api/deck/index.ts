// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getAllDecks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const decks = await prisma.deck.findMany({
      include: {
        characters: {
          include: {
            character: true,
          },
        },
      },
    });
    res.status(200).json(decks);
  } catch (error) {
    console.error(`Error: ${error}`);
    res
      .status(500)
      .json({
        error: "There was an error trying to fetch the decks",
        details: error,
      });
  }
}
