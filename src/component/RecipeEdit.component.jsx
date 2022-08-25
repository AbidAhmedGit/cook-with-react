import React, {useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit.component'
import { recipeContext } from './App';
import { v4 as uuidv4 } from 'uuid';


export default function RecipeEdit({recipe}) {
  const {handleRecipeChange, handleSelectedRecipe} = useContext(recipeContext)
  // console.log(recipe)

  function handleChange(changes) {
    handleRecipeChange(recipe.id, {...recipe, ...changes})
  }

  // setup handle ingredient change here
  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const idx = recipe.ingredients.findIndex(i=>i.id === id);
    newIngredients[idx] = ingredient;
    handleChange({ingredients: newIngredients})
  }

  function handleAddIngredients() {
    handleChange({ingredients: [...recipe.ingredients,
        {id: uuidv4(),
        name: '',
        amount: ''}
    ]}
    )
  }

  function handleIngredientDelete(id) {
    const newIngredient = [...recipe.ingredients];
    const filteredIngredient = newIngredient.filter(i=>i.id!==id);
    handleChange({ingredients: filteredIngredient})
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={()=>{handleSelectedRecipe(undefined)}}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label
          htmlFor="name"
          className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          defaultValue={recipe.name}
          onInput={e=>handleChange({name: e.target.value})}
          />
        <label
          htmlFor="cookTime"
          className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          defaultValue={recipe.cookTime}
          onInput={e=> handleChange({cookTime: e.target.value})}
          />
        <label
          htmlFor="servings"
          className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit__input"
          defaultValue={recipe.servings}
          onInput={e=>handleChange({servings: e.target.value})}
          />
        <label
          htmlFor="instructions"
          className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
          defaultValue={recipe.instructions}
          onInput={e=>handleChange({instructions: e.target.value})}
          ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange = {handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={()=>{handleAddIngredients()}}
        >Add Ingredient</button>
      </div>
    </div>
  )
}
