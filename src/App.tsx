// eslint-disable-next-line
import React, { useState } from 'react'
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'


import { SortTypes } from './Types'
import Table from './components/Table'
import SortFilter from './components/SortFilter'
import { cssContainer } from './Styles'

const App = () => {

  const [sortValue, setSortValue] = useState("---" as SortTypes)
  const [filterValue, setFilterValue] = useState('')

  const handleInputChange = (e: { target: { value: any; }; }) => {
    setFilterValue(e.target.value)
  }

  const handleSelectChange = (e: { target: { value: any; }; }) => {
    setSortValue(e.target.value)
  }

  return (
    <div css={cssContainer}>
      <SortFilter filterValue={filterValue} sortValue={sortValue} handleSelectChange={handleSelectChange} handleInputChange={handleInputChange} />
      <Table filterValue={filterValue} sortValue={sortValue} />
    </div>
  )
}

export default App;
