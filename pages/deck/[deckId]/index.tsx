import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Deck = () => {
  const [deck, setDeck] = useState({} as any);
  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(Array<any>);

  const router = useRouter();
  const { deckId } = router.query;

  useEffect(() => {
    setLoading(true);

    async function getDeck() {
      const endpoint = `/api/deck/${deckId}`; // corrected API endpoint
      console.log(deckId);
      const response = await fetch(endpoint);
      const result = await response.json();

      setDeck(result);
      setCharacters(result.characters); // set characters from deck
      setLoading(false);
    }

    if (deckId) {
      getDeck();
    }
  }, [deckId]);

  if (isLoading) return <h2>Loading...</h2>;
  if (!deck) return <h2>Cannot find the deck.</h2>;

  return (
    <div>
      <h1>{deck.name}</h1>

      <h3>Add your character</h3>

      <div>
        <>
          {/* {characters.map((character: any) => {
              return (
                <div key={character.id}>
                  <h4>{character.name}</h4>
                </div>
              )
            })} */}
        </>
      </div>

      <button>Delete this deck</button>
    </div>
  );
};

export default Deck;
