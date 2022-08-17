import React from 'react'
import Recipe from './Recipe.component'

export default function RecipeList(props) {

  const {
    recipes,
    handleAddRecipe,
    handleDelete,
  } = props;

    console.log(`recipeList//recipes: ${JSON.stringify(recipes)}`)
    console.log(`recipeList//...recipes: ${JSON.stringify(...recipes)}`)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              handleDelete={handleDelete}
            />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={handleAddRecipe}
        >
            Add Recipe
        </button>
      </div>
    </div>
  )
}

