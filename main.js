// HTML selectors

const mainForm = document.getElementById("mainForm");
const outputDiv = document.getElementById("output");

//Variables for the inputs

const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const birthdayInput = document.getElementById("birthday");

//Event listener

mainForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const interests = Array.from(
    document.querySelectorAll("input[name='interests']:checked")
  ).map(el => el.value);

  console.log("First name is: " + firstnameInput.value);
  console.log("Last name is: " + lastnameInput.value);
  console.log("My email is: " + emailInput.value);
  console.log("My password is: " + passwordInput.value);
  console.log("My birthday is: " + birthdayInput.value);
  console.log("My interests are: " + (interests.length > 0 ? interests.join(", ") : "None selected"));

//Output

outputDiv.innerHTML = `
    <p>My first name is: ${firstnameInput.value}</p>
    <p>My last name is: ${lastnameInput.value}</p>
    <p>My email is: ${emailInput.value}</p>
    <p>My password is: ${passwordInput.value}</p>
    <p>My birthday is: ${birthdayInput.value}</p>
    <p>My interests are: ${interests.length > 0 ? interests.join(", ") : "None selected"}</p>
  `;
});



