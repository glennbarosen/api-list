export type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export type SearchResults = {
    Search: Array<Movie>
}

export enum SortTypes {
    yearAsc = 'yearAsc',
    yearDesc = 'yearDesc',
    titleAsc = 'titleAsc',
    titleDesc = 'titleDesc',
    default = '---'
}