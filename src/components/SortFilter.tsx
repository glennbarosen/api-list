import React from 'react'
import { SortTypes } from '../Types'

interface ISortFilterProps {
    filterValue: string
    sortValue: string
    handleSelectChange: (e: { target: { value: any; }; }) => void
    handleInputChange: (e: { target: { value: any; }; }) => void

}
const SortFilter = (props: ISortFilterProps) => {

    return (
        <div>
            <label>Filter: </label>
            <input type='text' value={props.filterValue} onChange={props.handleInputChange} />

            <label>Sort: </label>
            <select name='sort' value={props.sortValue} onChange={props.handleSelectChange}>
                <option value={SortTypes.default}>- -</option>
                <option value={SortTypes.yearAsc}>Year: Ascending</option>
                <option value={SortTypes.yearDesc}>Year: Descending</option>
                <option value={SortTypes.titleAsc}>Title: Ascending</option>
                <option value={SortTypes.titleDesc}>Year: Descending</option>
            </select>
        </div>
    )
}

export default SortFilter