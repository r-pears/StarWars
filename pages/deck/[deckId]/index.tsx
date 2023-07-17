import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import deckStyle from "./index.module.css";

const Deck = () => {
  const [deck, setDeck] = useState({} as any);
  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(Array<any>);
  const [allCharacters, setAllCharacters] = useState(Array<any>);
  const [errorAlreadyExists, showErrorAlreadyExists] = useState(false);

  const router = useRouter();
  const { deckId } = router.query;
  const url = `/api/deck/${deckId}`;

  useEffect(() => {
    fetch("/api/character")
      .then((res) => res.json())
      .then((data) => {
        setAllCharacters(data);
      });
  }, []);

  useEffect(() => {
    setLoading(true);

    async function getDeck() {
      const response = await fetch(url);
      const result = await response.json();
      setDeck(result);
      setCharacters(result.characters); // set characters from deck
      setLoading(false);
    }

    if (deckId) {
      getDeck();
    }
  }, [deckId, url]);

  const handleDeleteDeck = () => {
    const deleteMethod = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    fetch(url, deleteMethod)
      .then((response) => response.json)
      .catch((err) => console.log(err));
    router.push("/deck");
  };

  const handleAddToDeck = (id: number) => {
    showErrorAlreadyExists(false);

    characters.forEach((char: any) => {
      if (char.character.id === id) {
        showErrorAlreadyExists(true);
      }
    });

    if (!errorAlreadyExists) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "add",
          characters: [id],
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      router.reload();
    }
  };

  const handleDeleteFromDeck = (id: number) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        characters: [id],
        action: "delete",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    router.reload();
  };

  if (isLoading) return <h2 className={deckStyle.container}>Loading...</h2>;
  if (!deck)
    return <h2 className={deckStyle.container}>Cannot find the deck.</h2>;

  return (
    <div className={deckStyle.container}>
      <h1 className={deckStyle.title}>{deck.name}</h1>

      <h3 className={deckStyle.add}>Add your character</h3>
      <div className={deckStyle.availableContainer}>
        {allCharacters.map((char: any) => {
          return (
            <div
              key={char.id}
              className={deckStyle.availableName}
              onClick={() => handleAddToDeck(char.id)}
            >
              {char.name}
            </div>
          );
        })}
      </div>

      <div>
        {characters.length > 0 && (
          <h2 className={deckStyle.inYourDeckTitle}>In your deck:</h2>
        )}
        {characters.map((character: any) => {
          return (
            <div
              key={character.characterId}
              className={deckStyle.characterContainer}
            >
              <h4 className={deckStyle.yourCharacter}>
                {character.character.name}
              </h4>
              <div
                className={deckStyle.characterDelete}
                onClick={() => handleDeleteFromDeck(character.characterId)}
              >
                x
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => handleDeleteDeck()}
        className={deckStyle.deckDelete}
      >
        Delete this deck
      </button>
    </div>
  );
};

export default Deck;
