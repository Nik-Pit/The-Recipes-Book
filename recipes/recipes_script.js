"use strict";
// Recipes array to retrieve recipe objects
let recipes = JSON.parse(localStorage.getItem("recipes"));
//Function to view the recipe

function viewRecipe(recipe) {
  const modal = document.getElementById("modal");
  const recipeTitle = document.getElementById("title");
  const recipeIngredients = document.getElementById("ingredients");
  const recipeInstructions = document.getElementById("instructions");
  recipeTitle.textContent = recipe.title;
  recipeIngredients.innerHTML = "";
  recipeInstructions.innerHTML = "";
  // Split ingredients and instructions into arrays
  const ingredientsArray = recipe.ingredients.split("\n");
  const instructionsArray = recipe.instructions.split("\n");
  // Create and append li elements for ingredients and instructions
  ingredientsArray.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    recipeIngredients.appendChild(li);
  });

  instructionsArray.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    recipeInstructions.appendChild(li);
  });

  modal.showModal();
}
const closeModal = document.querySelector(".close-button");
closeModal.addEventListener("click", () => modal.close());
// Function to delete a recipe
function deleteRecipe(index) {
  recipes.splice(index, 1);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  displayRecipes();
}
// Function to display recipes in the UI
function displayRecipes() {
  const recipesList = document.getElementById("recipes");
  recipesList.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const li = document.createElement("li");
    li.textContent = `${recipe.title} - ${recipe.category}`;
    const viewButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    viewButton.textContent = "View Recipe";
    deleteButton.textContent = "Delete Recipe";
    viewButton.classList.add("Btns");
    deleteButton.classList.add("Btns");
    viewButton.addEventListener("click", () => viewRecipe(recipe));
    deleteButton.addEventListener("click", () => deleteRecipe(index));
    li.appendChild(viewButton);
    li.appendChild(deleteButton);
    recipesList.appendChild(li);
  });
}

// Initial display of recipes
displayRecipes();
