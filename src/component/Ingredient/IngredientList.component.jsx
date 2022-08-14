import React from 'react'
import Ingredient from './ingredient.component'

export default function IngredientList({ingredients}) {
    {/* <div>--------------IngredientList------------</div> */}
    {console.log(`ingredientListProp: ${JSON.stringify(ingredients)}`)}

    const ingredientElements = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient}/>
            })

  return (
    <div className="ingredient-grid">
      {ingredientElements}
    </div>
  )


}
