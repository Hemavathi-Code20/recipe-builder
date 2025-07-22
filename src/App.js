import React, { useState, useEffect } from 'react';
import IngredientSelector from './components/IngredientSelector';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import recipes from './data/recipes.json';

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedPantry = JSON.parse(localStorage.getItem('pantry'));
    const savedFavs = JSON.parse(localStorage.getItem('favorites'));
    if (savedPantry) setSelectedIngredients(savedPantry);
    if (savedFavs) setFavorites(savedFavs);
  }, []);

  useEffect(() => {
    localStorage.setItem('pantry', JSON.stringify(selectedIngredients));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [selectedIngredients, favorites]);

  const handleSelect = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const toggleFavorite = (title) => {
    setFavorites((prev) =>
      prev.includes(title)
        ? prev.filter((fav) => fav !== title)
        : [...prev, title]
    );
  };

  const filteredRecipes = recipes
    .filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map((recipe) => {
      const matchCount = recipe.ingredients.filter((ing) =>
        selectedIngredients.includes(ing)
      ).length;
      return { ...recipe, matchCount };
    })
    .sort((a, b) => b.matchCount - a.matchCount); // Sort by best match

  return (
    <div className="app">
      <h1>🥗 Recipe Builder</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <IngredientSelector
        selectedIngredients={selectedIngredients}
        onSelect={handleSelect}
      />

      <h2>Recipes</h2>
      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, idx) => (
            <RecipeCard
              key={idx}
              recipe={recipe}
              onClick={() => setSelectedRecipe(recipe)}
              isFavorite={favorites.includes(recipe.title)}
              onFavoriteToggle={() => toggleFavorite(recipe.title)}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};

export default App;
