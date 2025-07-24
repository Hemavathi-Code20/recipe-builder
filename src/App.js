import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import recipes from './data/recipes.json';

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSpin = () => {
    const all = IngredientSelector.ALL_INGREDIENTS;
    const randomSet = [];

    while (randomSet.length < 3) {
      const choice = all[Math.floor(Math.random() * all.length)];
      if (!randomSet.includes(choice)) randomSet.push(choice);
    }

    setSelectedIngredients(randomSet);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.some((ing) => selectedIngredients.includes(ing))
  );

  return (
    <div className="app">
      <h1>🎲 Mystery Meal Maker</h1>

      <IngredientSelector
        ingredients={selectedIngredients}
        onSpin={handleSpin}
      />

      <h2>Recipes Based on Mystery Ingredients</h2>
      <div className="recipe-grid">
        {filteredRecipes.length ? (
          filteredRecipes.map((r, i) => (
            <RecipeCard key={i} recipe={r} onClick={() => setSelectedRecipe(r)} />
          ))
        ) : (
          <p>No recipes match your spun ingredients.</p>
        )}
      </div>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};

export default App;
