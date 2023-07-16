// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handleRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const numericId = Number(id);

  // CRUD actions
  if (req.method === "GET") {
    // Find a specific deck based on ID
    try {
      const deck = await prisma.deck.findUnique({
        where: { id: numericId },
        include: {
          characters: {
            include: {
              character: true,
            },
          },
        },
      });

      if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
      }

      res.status(200).json(deck);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "There was an error when trying to fetch a deck",
        details: error,
      });
    }
  } else if (req.method === "DELETE") {
    // Delete a specific deck based on ID
    try {
      const deck = await prisma.deck.delete({
        where: { id: numericId },
      });

      res.status(200).json({ message: "Deck deleted successfully", deck });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete deck", details: error });
    }
  } else if (req.method === "PUT") {
    // Update a deck with characters
    try {
      const { characters, action } = req.body; // Expect an array of character ids and an action

      // Find the correct deck to update
      const deck = await prisma.deck.findUnique({
        where: { id: numericId },
      });

      // Return error if deck not found
      if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
      }

      // Update the deck with the correct action
      if (action === "add") {
        // Add characters to a deck
        const updatedDeck = await prisma.deck.update({
          where: { id: numericId },
          data: {
            characters: {
              create: characters.map((characterId: number) => ({
                characterId: characterId,
              })),
            },
          },
          include: {
            characters: {
              include: {
                character: true,
              },
            },
          },
        });
        return res.status(200).json(updatedDeck);
      } else if (action === "delete") {
        // Delete characters from a deck
        const updatedDeck = await prisma.deck.update({
          where: { id: numericId },
          data: {
            characters: {
              delete: characters.map((characterId: number) => ({
                characterId: characterId,
              })),
            },
          },
          include: {
            characters: {
              include: {
                character: true,
              },
            },
          },
        });
        return res.status(200).json(updatedDeck);
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Failed to update a deck", details: error });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET", "DELETE", "PUT"]);
    res.status(405).end(`Method ${req.method} - Not Allowed`);
  }
}
