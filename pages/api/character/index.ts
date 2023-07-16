// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getAllCharacters(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const characters = await prisma.character.findMany({
      include: {
        decks: {
          include: {
            deck: true,
          },
        },
      },
    });
    res.status(200).json(characters);
  } catch (error) {
    console.error(`Error: ${error}`);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching the characters.",
        details: error,
      });
  }
}
