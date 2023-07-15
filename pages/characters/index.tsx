import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const Characters = () => {
  const [people1, setPeople1] = useState(Array<any>)
  const [people2, setPeople2] = useState(Array<any>)
  const [people3, setPeople3] = useState(Array<any>)
  const [people4, setPeople4] = useState(Array<any>)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const fetch1 = fetch('https://swapi.dev/api/people/');
      const fetch2 = fetch('https://swapi.dev/api/people/?page=2');
      const fetch3 = fetch('https://swapi.dev/api/people/?page=3');
      const fetch4 = fetch('https://swapi.dev/api/people/?page=4');
      try {
        const [response1, response2, response3, response4] = await Promise.all([fetch1, fetch2, fetch3, fetch4]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();
        setPeople1(data1.results);
        setPeople2(data2.results);
        setPeople3(data3.results);
        setPeople4(data4.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  if (isLoading) return <h2>Loading...</h2>

  return (
    <div>
      <h1>All available characters</h1>
      <Link href={``}><h2>Create a new deck</h2></Link>
      <div>
        {people1.map((char: any, index: number) => {
          console.log(char)
            return (
              <div key={char.id}>
                {char.name}
              </div>
            );
        })}   

        {people2.map((char: any, index: number) => {
          console.log(char)
            return (
              <div key={char.id}>
                {char.name}
              </div>
            );
        })} 

        {people3.map((char: any, index: number) => {
          console.log(char)
            return (
              <div key={char.id}>
                {char.name}
              </div>
            );
        })} 

        {people4.map((char: any, index: number) => {
          console.log(char)
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