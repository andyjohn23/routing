import React from 'react'
import "./Recipeitem.css"
import { Link } from 'react-router-dom'


function Recipeitem({ props }) {
    return (
        <div className='recipeItem-container'>
            {props.map(({ id, recipeName, recipeImage, ingredients }) => (
                <div className="card" key={id}>
                    <img src={recipeImage} className="card-img-top" alt="chicken" />
                    <div className="card-body">
                        <h5 className="card-title">{recipeName}</h5>
                        <p className="card-text">{ingredients}</p>
                        <Link to={`/recipe/${id}`} className="btn btn-primary">View Detail</Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Recipeitem