import React, { useState, useEffect } from "react";
import Link from "next/link";
import deckStyle from "./index.module.css";

const Decks = () => {
  const [decks, setDecks] = useState(Array<any>);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/deck")
      .then((res) => res.json())
      .then((data) => {
        setDecks(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className={deckStyle.container}>
      <h1 className={deckStyle.title}>All available decks</h1>
      {decks.length === 0 && (
        <h4 className={deckStyle.empty}>No decks created</h4>
      )}
      <div>
        {decks.map((deck: any, index: number) => {
          return (
            <div key={deck.id}>
              <Link
                className={deckStyle.aTag}
                href={{
                  pathname: "/deck/" + deck.id,
                }}
              >
                <h2 className={deckStyle.link}>{deck.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Decks;
