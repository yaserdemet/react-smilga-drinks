import React from 'react'
import { useState, useContext , createContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext()  // ?  createContext ile bir context oluşturduk.
export const useGlobalContext = () => {

  // ? burada custom hook yazdık. useContextin içine create contexti attık. 
  // * sadece useGlobalContext çağırmak yeterli olacaktır.

    return useContext(AppContext) 
}

const ContextApi = ({children}) => {

  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('b')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data);
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])

  return (
    <AppContext.Provider  value={{loading ,  cocktails, setSearchTerm}}>

        {children}
    </AppContext.Provider>
  )
}

export default ContextApi