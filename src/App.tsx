import React, { useEffect, useState } from 'react'
import { css, jsx } from '@emotion/core'
/** @jsx jsx */

import { SearchResults, MovieResult } from './Types'

const API_KEY = `${process.env.REACT_APP_API_KEY}`
const URL = 'http://www.omdbapi.com/?apikey=' + API_KEY + '&'

const cssTable = css`
  table, th, td {
    border: 1px solid black;
  }

  td {
    place-items: center;
    padding: 15px;
  }
`
const cssContainer = css`
  display: grid;
  place-items: center;
`

const App = () => {

  const [results, setResults] = useState({ Search: [] } as unknown as SearchResults);
  const [currentSort, setCurrentSort] = useState('up')

  useEffect(() => {
    const getSearchResult = async () => {
      const searchResponse = await fetch(URL + 's=harry potter');
      const jsonSearchResponse = await searchResponse.json();
      setResults(jsonSearchResponse);
    }
    getSearchResult()
  }, []);

  const handleSortChange = () => {
    if (currentSort === 'down') {
      setCurrentSort('up')
    } else {
      setCurrentSort('down')
    }
  }

  return (
    <div css={cssContainer}>
      <h1>Movie Search:</h1>
      <div>
        <table css={cssTable}>
          <thead>
            <tr>
              <th>Poster</th>
              <th>Title<button onClick={handleSortChange}>{currentSort}</button></th>
              <th>Year</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {
              [...results.Search]
                .sort()
                .map((mov: MovieResult) => (
                  <tr key={mov.imdbID}>
                    <td><img width='150px' height='200px' src={mov.Poster} alt='' /></td>
                    <td>{mov.Title}</td>
                    <td>{mov.Year}</td>
                    <td>{mov.Type}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
