import React from 'react';
import './RecipeModal.css';

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.title}</h2>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h4>Steps:</h4>
        <p>{recipe.steps}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecipeModal;
