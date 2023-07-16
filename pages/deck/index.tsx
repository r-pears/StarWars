import React, { useState, useEffect } from "react";
import Link from "next/link";

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
    <div>
      <h1>All available decks</h1>
      <Link href={`/deck/new`}>Create a new deck</Link>
      <div>
        {decks.map((deck: any, index: number) => {
          return (
            <div key={deck.id}>
              <Link
                href={{
                  pathname: "/deck/" + deck.id,
                }}
              >
                <h2>{deck.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Decks;
