import React from "react";
const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h3>{recipe.title}</h3>
            <ul>
                {recipe.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                ))}
            </ul>
            <p>{recipe.steps}</p>
        </div>
    )
}
export default RecipeCard;