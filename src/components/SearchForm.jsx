import React from 'react'
import { useGlobalContext } from '../context/ContextApi';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm