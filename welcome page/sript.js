//Users accounts stored on local storage
let users = JSON.parse(localStorage.getItem("users")) || [];

//New User//
//New User Form
let newUserForm = document.getElementById("new_user");
//Function Declaration
function redirect(e) {
  //Prevent the default behavior of the form
  e.preventDefault();
  // Retrieve input values from form fields
  let newUserFirstName = document.getElementById("fname").value;
  let newUserLastName = document.getElementById("lname").value;
  let newUserEmail = document.getElementById("mail").value;
  let newUserUserName = document.getElementById("new_username").value;
  let newUserPassword = document.getElementById("new_password").value;
  // Create a new user object with the retrieved input values
  let newUser = {
    fName: newUserFirstName,
    lName: newUserLastName,
    email: newUserEmail,
    uName: newUserUserName,
    pass: newUserPassword,
  };
  //Get the current user username
  let currentUser = localStorage.setItem(
    "currentUser",
    JSON.stringify(newUser.uName)
  );
  // Store the user object in localStorage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  // Redirect to another page after form submission
  window.location.href = "../home_page/home.html";
  //Reset the form
  newUserForm.reset();
}
//Add the function to the form
newUserForm.addEventListener("submit", redirect);

//Registered User//
//Registered User Form
let oldUserForm = document.getElementById("registered_user");
//Function Declaration
function redirectOld(e) {
  //Prevent the default behavior of the form
  e.preventDefault();
  // Retrieve input values from form fields
  let oldUserUserName = document.getElementById("username").value;
  let oldUserPassword = document.getElementById("password").value;
  //Get the current user username
  let currentUser = localStorage.setItem(
    "currentUser",
    JSON.stringify(oldUserUserName)
  );
  //Check if the user exists
  if (
    users.some(
      (user) => user.uName === oldUserUserName && user.pass === oldUserPassword
    )
  ) {
    window.location.href = "../home_page/home.html";
  } else {
    alert("Not a valid user!Please try again or continue as a visitor.");
  }
  //reset the form
  oldUserForm.reset();
}
//Add the function to the form
oldUserForm.addEventListener("submit", redirectOld);

//Visitor//
//Visitor form
let visitorForm = document.getElementById("visitor_user");
//Function Declaration
function redirectVisitor(e) {
  //Prevebt the default behavior of the form
  e.preventDefault();
  // Retrieve input values from form fields
  let visitorName = document.getElementById("visitor_name").value;
  //Store the visitors name on local storage
  let currentUser = localStorage.setItem(
    "currentUser",
    JSON.stringify(visitorName)
  );
  // Redirect to another page after form submission
  window.location.href = "../home_page/home.html";
  //reset the form
  visitorForm.reset();
}
//Add the function to the form
visitorForm.addEventListener("submit", redirectVisitor);
