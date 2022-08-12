import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)

    const getDetail = async () =>{
        setLoading(true)
        try {
          const response = await fetch(`${url}${id}`)
          const data = await response.json()
          // console.log(data);
          const { drinks } = data
          setCocktail(drinks)
          console.log(cocktail);
          
          if(data.drinks){
            const {strDrink : name , strDrinkThumb : image , strAlcoholic : info, strCategory:category , strInstructions : instructions,
            strIngredient1 , strIngredient2 , strIngredient3 , strIngredient4 , strIngredient5 ,
            
            } = data.drinks[0]

            const ingredients = [strIngredient1 , strIngredient2 , strIngredient3 , strIngredient4 , strIngredient5]
          }


          setLoading(false)
        }
        catch (err) {
          console.log(err);
          setLoading(false)
        }
    }

    useEffect(() => {
        getDetail()
    }, [id])



  return (
   <div>
        <h2>
   
        </h2>
      
   </div>
  )
}

export default SingleCocktail