// Error handler
let errors;

// Form Elements
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let address = document.querySelector("#address");
let city = document.querySelector("#city");
let state = document.querySelector("#state");
let zip = document.querySelector("#zip");
let area = document.querySelector("#area");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let confirmemail = document.querySelector("#confirmemail");
let meal = document.querySelectorAll('input[name="meal"]');
let contact = document.querySelectorAll('input[type="checkbox"]')

// Regular Expressions
let alpha = /^[a-z]+$/i;
let numeric = /^[0-9]+$/i;
let alphaNumeric = /^[a-z\d\-_\s]+$/i;
let emailValidation = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{2,3}$/i;

// Validation Function
function validateForm() {
  errors = 0;
  let contactchecked = document.querySelectorAll('input[type="checkbox"]:checked');
  let mealchecked = document.querySelectorAll('input[name="meal"]:checked');
  
  // Textboxes
  alpha.test(firstname.value) ? valid(firstname) : invalid(firstname);
  alpha.test(lastname.value) ? valid(lastname) : invalid(lastname);
  alphaNumeric.test(address.value) ? valid(address) : invalid(address);
  alpha.test(city.value) ? valid(city) : invalid(city);
  state.value == "" ? invalid(state) : valid(state);
  zip.value.length == 5 && numeric.test(zip.value) ? valid(zip) : invalid(zip);
  area.value.length == 3 && numeric.test(area.value) ? valid(area) : invalid(area);
  phone.value.length == 7 && numeric.test(phone.value) ? valid(phone) : invalid(phone);
  emailValidation.test(email.value) ? valid(email) : invalid(email);
  confirmemail.value == email.value ? valid(confirmemail) : invalid(confirmemail);
  
  // Radio and Checkboxes
  mealchecked.length == 0 ? meal.forEach(element => invalid(element)) : meal.forEach(element => valid(element));
  contactchecked.length < 2 ? contact.forEach(element => invalid(element)) : contact.forEach(element => valid(element));
  
  // Validation Helpers
  function invalid(element) {
    element.classList.add("is-invalid");
    errors++;
  }
  function valid(element) {
    element.classList.remove("is-invalid");
  }
  
  return errors > 0 ? false : true;
}

function resetform() {
  document.getElementById("myform").reset();
}
document.forms[0].reset();