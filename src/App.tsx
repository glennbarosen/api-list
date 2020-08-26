import React, { useEffect, useState } from 'react';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const URL = 'http://www.omdbapi.com/?apikey=' + API_KEY + '&';

interface Movie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

interface Result {
  Search: []

}

const App = () => {

  const [result, setResult] = useState({ Search: [] } as Result);

  useEffect(() => {
    const getResult = async () => {
      const response = await fetch(URL + 's=harry potter');
      const jsonResponse = await response.json();
      setResult(jsonResponse);
    }
    getResult();
  }, []);
  console.log(result)
  return (

    <div>
      <h1>Matrix</h1>
      <div className='Container'>
        <ul>
          {
            result.Search.map((movie: Movie) => {
              return <li key={movie.imdbID}>{movie.Title}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App;
