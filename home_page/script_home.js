const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
// Toggle visibility of nav links when menu button is clicked
menuBtn.addEventListener("click", function () {
  navLinks.style.display === "block" ? "none" : "block";
});

// Close nav links if clicked outside the sidebar area
document.addEventListener("click", function (e) {
  if (!navLinks.contains(e.target) && e.target !== menuBtn) {
    navLinks.style.display = "none";
  }
});

// Show nav links when hovering over menu button
menuBtn.addEventListener("mouseenter", function () {
  navLinks.style.display = "block";
});

// Hide nav links when mouse leaves sidebar area
document.querySelector("body").addEventListener("mouseout", function (e) {
  if (!navLinks.contains(e.target) && e.target !== menuBtn) {
    navLinks.style.display = "none";
  }
});
//Greet the user
function userGreeting() {
  let userName = document.getElementById("userName");
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  userName.textContent = `Welcome ${currentUser}!`;
}
userGreeting();
//Redirect to the Add Recipe Page
let btn = document.getElementById("addRecipe");
function addRecipe() {
  window.location.href = "../add_recipe/main.html";
}
btn.addEventListener("click", addRecipe);
