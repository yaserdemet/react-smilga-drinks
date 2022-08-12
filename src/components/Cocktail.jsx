import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({image, name, id , info , glass}) => {
  return (
    <article className='cocktail'>
        <div className="img-container">
            <img src={image} alt="" />
        </div>
        <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link to={`/cocktail/${id}`}
        </div>
    </article>
  )
}

export default Cocktail