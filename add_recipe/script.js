"use strict";
//User

function displayUser() {
  let userName = document.getElementById("user");
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  userName.textContent = currentUser;
}
displayUser();
//Functions to create visually the new recipe
const input1 = document.getElementById("recipeTitle");
const recipeTitle = document.getElementById("newRecipeTitle");
const textarea1 = document.getElementById("recipeIngredients");
const ingredientsList = document.getElementById("ingredientsList");
const textarea2 = document.getElementById("recipeInstructions");
const instructionsList = document.getElementById("instructionsList");
//The title
function handleInput() {
  recipeTitle.textContent = input1.value.toUpperCase();
  recipeTitle.style.backgroundColor = "#322C2B";
}
input1.addEventListener("input", handleInput);
//The ingredients
function handleInput1() {
  ingredientsList.innerHTML = "";

  const textContent = textarea1.value.trim();

  const lines = textContent.split("\n");

  lines.forEach((line) => {
    if (line.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = line;
      ingredientsList.appendChild(listItem);
    }
  });
  ingredientsList.style.backgroundColor = "#AF8260";
}
textarea1.addEventListener("input", handleInput1);
//The instructions
function handleInput2() {
  instructionsList.innerHTML = "";

  const textContent = textarea2.value.trim();

  const lines = textContent.split("\n");

  lines.forEach((line) => {
    if (line.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = line;
      instructionsList.appendChild(listItem);
    }
  });

  instructionsList.style.backgroundColor = "#E4C59E";
}
textarea2.addEventListener("input", handleInput2);

// // Function to add a new recipe
let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
function addRecipe() {
  let recipeTitle = document.getElementById("recipeTitle").value;
  let recipeIngredients = document.getElementById("recipeIngredients").value;
  let recipeInstructions = document.getElementById("recipeInstructions").value;
  let recipeCategory = document.getElementById("categories").value;
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const newRecipe = {
    creator: currentUser,
    title: recipeTitle,
    ingredients: recipeIngredients,
    instructions: recipeInstructions,
    category: recipeCategory,
  };

  recipes.push(newRecipe);

  localStorage.setItem("recipes", JSON.stringify(recipes));
}
// // Event listener for form submission
const recipeForm = document.getElementById("recipeForm");
recipeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addRecipe();
  recipeForm.reset();
  location.reload();
});
