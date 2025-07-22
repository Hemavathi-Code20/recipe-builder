import React from "react";
const All_INGREDIENTS = ['egg', 'milk', 'bread', 'cheese', 'tomato', 'onion',
    'pasta', 'garlic', 'olive oil', 'salt', 'pepper'];

const IngredientSelector = ({ selectedIngredients, onselect }) => {
    return (
        <div className="ingredient-selector">
            <h2> Select Your Pantry Ingredients : </h2>
            <div className="ingredient-list">
                {All_INGREDIENTS.map((ingredient) => (
                    <button key={ingredient}
                        className={selectedIngredients.includes(ingredient) ? "selected" : ""}
                        onClick={() => onselect(ingredient)}
                    >
                        {ingredient}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default IngredientSelector;