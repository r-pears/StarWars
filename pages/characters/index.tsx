import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const Characters = () => {  
  const [characters, setCharacters] = useState(Array<any>)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/character')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCharacters(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <h2>Loading...</h2>

  return (
    <div>
      <h1>All available characters</h1>
      <Link href={`deck/new`}><h2>Create a new deck</h2></Link>
      <div>
        {characters.map((char: any, index: number) => {
            return (
              <div key={char.id}>
                {char.name}
              </div>
            );
        })}   
      </div>
    </div>
  )
}

export default Characters;