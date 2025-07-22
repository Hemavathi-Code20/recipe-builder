import React from 'react';

const RecipeCard = ({ recipe, onClick, isFavorite, onFavoriteToggle }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img
        src={recipe.thumbnail || 'https://via.placeholder.com/300x150'}
        alt={recipe.title}
        className="thumbnail"
      />
      <h4>{recipe.title}</h4>
      <p>Match: {recipe.matchCount} / {recipe.ingredients.length}</p>
      <button
        className="fav-btn"
        onClick={(e) => {
          e.stopPropagation(); // Prevent modal open
          onFavoriteToggle();
        }}
      >
        {isFavorite ? '★ Favorite' : '☆ Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeCard;
