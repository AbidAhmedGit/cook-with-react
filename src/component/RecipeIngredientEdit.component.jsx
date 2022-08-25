import React from 'react'

export default function RecipeIngredientEdit({ingredient, handleIngredientChange, handleIngredientDelete}) {

    // const {id, name, amount} = ingredient;

    function handleChange(changes){
      handleIngredientChange(ingredient.id, {...ingredient, ...changes})
    }

  return (
    <>
        <input type="text" className="recipe-edit__input" defaultValue={ingredient.name} onInput={e=>handleChange({name: e.target.value})}/>
        <input type="text" className="recipe-edit__input" defaultValue={ingredient.amount} onInput={e=>handleChange({amount: e.target.value})}/>
        <button className="btn btn--danger" onClick={()=>{handleIngredientDelete(ingredient.id)}}>&times;</button>
    </>
  )
}
