import RecipeList from "./RecipeList.component";
import '../css/app.css'
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  console.log(JSON.stringify(...recipes))

  function handleAddRecipe() {
    const template = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: "instructions",
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '2 Pounds'
        }
      ]
    }

    setRecipes([...recipes, template])
  }

  function handleDelete(id) {
    const filteredRecipes = recipes.filter(recipe => recipe.id != id)
    setRecipes(filteredRecipes)
  }

  return (
    <div>
      {/* <>------------------APP-------------------</> */}
      <RecipeList
        recipes={recipes}
        handleAddRecipe={handleAddRecipe}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: uuidv4(),
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: uuidv4(),
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: uuidv4(),
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: uuidv4(),
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  }
]



export default App;
