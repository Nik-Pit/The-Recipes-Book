//Say goodbye to the user
function displayUser() {
  let userName = document.getElementById("user");
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  userName.textContent = currentUser;
}
displayUser();
