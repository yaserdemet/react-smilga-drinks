import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import SingleCocktail from '../pages/SingleCocktail'
import Error from '../pages/Error'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const AppRouter = () => {
  return (
    <div>

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/cocktail/:id" element={<SingleCocktail/>} />
                <Route path="*" element={<Error/>} />


            </Routes>
        
        
        
        </BrowserRouter>


    </div>
  )
}

export default AppRouter