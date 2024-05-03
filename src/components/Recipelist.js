import React from 'react'
import "./Recipelist.css"
import Recipeitem from './Recipeitem'
import { recipes } from '../Data'



function Recipelist() {
    return (
        <div className='recipelist-container'>
            <Recipeitem props={recipes}/>
        </div>
    )
}

export default Recipelist