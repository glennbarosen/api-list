// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { SearchResults, Movie } from '../Types'

/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'
import { cssTable } from '../Styles'

const API_KEY = `${process.env.REACT_APP_API_KEY}`
const URL = 'http://www.omdbapi.com/?apikey=' + API_KEY + '&'

interface ITableProps {
    filterValue: string
    sortValue: string
}



const Table = (props: ITableProps) => {

    useEffect(() => {
        const getSearchResult = async () => {
            const response = await fetch(URL + 's=harry potter')
            const jsonResponse = await response.json()
            setResults(jsonResponse);
        }
        getSearchResult()
    }, [])

    const [results, setResults] = useState({ Search: [] } as unknown as SearchResults)
    const sortTypesSwitch = (sortType: string) => {
        switch (sortType) {
            case 'yearAsc':
                return (a: Movie, b: Movie) => {
                    return a.Year.localeCompare(b.Year)
                }

            case 'yearDesc':
                return (a: Movie, b: Movie) => {
                    return b.Year.localeCompare(a.Year)
                }

            case 'titleAsc':
                return (a: Movie, b: Movie) => {
                    return a.Title.localeCompare(b.Title)
                }

            case 'titleDesc':
                return (a: Movie, b: Movie) => {
                    return b.Title.localeCompare(a.Title)
                }

            default:
                return (a: Movie, b: Movie) => 1
        }
    }

    return (
        <div>
            <table css={cssTable}>
                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        [...results.Search]
                            .filter((mov: Movie) => {
                                return mov.Title.toLowerCase().includes(props.filterValue.toLowerCase())
                                    || mov.Year.toString().includes(props.filterValue)
                            })
                            .sort(sortTypesSwitch(props.sortValue))
                            .map((mov: Movie) => (
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
    )
}

export default Table;