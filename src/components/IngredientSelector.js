import React from 'react';

const ALL_INGREDIENTS = [
  'egg', 'milk', 'bread', 'cheese', 'tomato', 'onion',
  'pasta', 'garlic', 'olive oil', 'salt', 'pepper'
];

const IngredientSelector = ({ selectedIngredients, onSelect }) => {
  return (
    <div className="ingredient-selector">
      <h3>Select Your Pantry:</h3>
      <div className="ingredient-list">
        {ALL_INGREDIENTS.map((ingredient) => (
          <button
            key={ingredient}
            className={selectedIngredients.includes(ingredient) ? 'selected' : ''}
            onClick={() => onSelect(ingredient)}
          >
            {ingredient}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IngredientSelector;
