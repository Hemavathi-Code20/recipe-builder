import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import recipes from './data/recipes.json';

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelect = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    )
  }
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.every((ing) => selectedIngredients.includes(ing))
  );
  return (
    <div className='app'>
      <h1>🥗 Recipe Builder</h1>
      <IngredientSelector
        selectedIngredients={selectedIngredients}
        onselect={handleSelect}
      />
      <h2>Matching Recipes</h2>
      <div className='recipe-grid'>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, idx) => (
            <div key={idx} onClick={() => setSelectedRecipe(recipe)}>
              <RecipeCard recipe={recipe} />
            </div>
          ))
        ) : (
          <p>No matching recipes. Try adding more ingredients!</p>
        )}
      </div>
      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  )
}
export default App;