import RecipeList from "./RecipeList.component";
import '../css/app.css'
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from "./RecipeEdit.component";

export const recipeContext = React.createContext()
const  LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'



function App() {
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    // const recipeJSON = null
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  });

  const [selectedRecipeId, setSelectedRecipeId] = useState();
  // using id to find the selected recipe
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  // useEffect for setting localStorage
  useEffect(() => {
    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]);


  const recipeContextValue = {
    handleAddRecipe,
    handleDelete,
    handleSelectedRecipe,
    handleRecipeChange
  }

  function handleAddRecipe() {
    const template = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }
    setSelectedRecipeId(template.id)
    setRecipes([...recipes, template])
  }

  function handleDelete(id) {
    if ((selectedRecipeId) !== null && (selectedRecipe === id)) {
      setSelectedRecipeId(undefined)
    }
    const filteredRecipes = recipes.filter(recipe => recipe.id !== id)
    setRecipes(filteredRecipes)
  }

  // function to setSelectedRecipeId retrieved from recipe
  function handleSelectedRecipe(id) {
    setSelectedRecipeId(undefined);
    setSelectedRecipeId(id);
  }

  // function to introduce changes to our recipe to the recipes state
  // takes in id and changed recipe as parameter
  function handleRecipeChange(id, recipe){
    // make a copy of the recipes state
    const newRecipes = [...recipes];
    // now we find the index of the recipe that we are changing in recipes
    const idx = recipes.findIndex(r => r.id === id);
    // use idx to introduce the change to newRecipes
    newRecipes[idx] = recipe;
    // now that our newRecipes is the recipes state we want we set our setRecipes to newRecipes
    setRecipes(newRecipes)
  }

  return (
    <div>
      {/* <>------------------APP-------------------</> */}

      <recipeContext.Provider value={recipeContextValue}>
        <RecipeList
          recipes={recipes}
        />
        {(selectedRecipe) && <RecipeEdit recipe={selectedRecipe}/>}
      </recipeContext.Provider>


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
