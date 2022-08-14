import React from 'react'

export default function Ingredient({name, amount}) {
  return (
    <>
    {/* <div>--------------Ingredient------------</div> */}
    {console.log(`IngredientProp> name: ${name} amount: ${amount}`)}
    <span>{name}</span>
    <span>{amount}</span>
    </>
  )
}
