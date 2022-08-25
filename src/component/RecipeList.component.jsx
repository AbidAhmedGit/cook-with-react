import React, {useContext} from 'react'
import Recipe from './Recipe.component'

import { recipeContext } from './App';

export default function RecipeList(props) {

  const {handleAddRecipe} = useContext(recipeContext)

  const {
    recipes,
  } = props;

    // console.log(`recipeList//recipes: ${JSON.stringify(recipes)}`)
    // console.log(`recipeList//...recipes: ${JSON.stringify(...recipes)}`)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
            />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={()=>handleAddRecipe()}
        >
            Add Recipe
        </button>
      </div>
    </div>
  )
}

