import React from 'react'
import "./RecipeDetail.css"
import { Link, useParams } from 'react-router-dom'
import { recipes } from '../Data';

function RecipeDetail() {
    const { id } = useParams();
    console.log(typeof (id))
    const recipe = (recipes.find(recipe => recipe.id === parseInt(id)))

    return (
        <div className='recipe-detail-container'>
            <div className="card">
                <img src={recipe.recipeImage} className="card-img-top" alt="chicken" />
                <div className="card-body">
                    <h5 className="card-title">{recipe.recipeName}</h5>
                    <p className="card-text">
                        {recipe.ingredents.map((ingredent, index) => (
                            <ul key={index}>
                                <li>{ingredent}</li>
                            </ul>
                        ))}
                    </p>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail