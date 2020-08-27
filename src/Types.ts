export type Movie = {
    Poster: string,
    Title: string,
    Year: string,
    Language: string,
    Runtime: string,
    Actors: string,
    Genre: string,
    imdbRating: string,
    imdbID?: string
}

export type MovieResult = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export type SearchResults = {
    Search: Array<MovieResult>
}