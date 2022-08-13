import React from 'react'
import { useGlobalContext } from '../context/ContextApi'
import {useRef, useEffect} from 'react'
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef()

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail(e) {
    setSearchTerm(searchValue.current.value)
    //  ?  bu kullanım onChange göre daha performanslı bir kullanım. Sadece son değişikliği alıyor
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            // *  bu kullanım onChange göre daha performanslı bir kullanım. Sadece son değişikliği alıyor

            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}