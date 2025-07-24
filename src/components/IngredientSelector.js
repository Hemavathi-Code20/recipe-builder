import React from 'react';

const ALL_INGREDIENTS = [
  'egg', 'milk', 'bread', 'cheese', 'tomato', 'onion',
  'pasta', 'garlic', 'olive oil', 'salt', 'pepper'
];

const IngredientSelector = ({ ingredients, onSpin }) => {
  return (
    <div className="ingredient-selector">
      <h3>Your Mystery Ingredients:</h3>
      <div className="ingredient-list">
        {ingredients.length > 0 ? (
          ingredients.map((ing, i) => (
            <span key={i} className="ingredient-pill">{ing}</span>
          ))
        ) : (
          <p>Click below to spin for ingredients!</p>
        )}
      </div>
      <button onClick={onSpin} className="spin-btn">🎡 Spin Ingredients</button>
    </div>
  );
};

IngredientSelector.ALL_INGREDIENTS = ALL_INGREDIENTS;
export default IngredientSelector;
