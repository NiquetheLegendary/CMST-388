/*
		Your Name: <Dominique Clarke>
		Last Modified Date: <04/26/2024>
		File: event_registration.js
		File Description: <The goal is for the 10 min. Countdown timer to function correctly, display error message When Putting Invalid Number of Tickets,
		have a submission Alert When Clicking "Purchase Tickets, an alert When Timer Has Expired and calculation functionality">
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.0;
var ticketSurcharge = 0.5;

/*** YOUR CODE STARTS BELOW HERE ***/

// variables //
let input = document.querySelector("#numTickets");
let errorMsg = document.querySelector("#msgTickets");
let displayValue = document.querySelector("#totalCost");
let contactInfo = document.querySelector("#contactInformation");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let errorName = document.querySelector("#msgname");
let errorEmail = document.querySelector("#msgemail");
let formPage = document.querySelector("#contact");
let names = /^[a-z]+$/i;
let emailValidation = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{2,3}$/i;
let timerSpan = document.querySelector("#timer");
let countDown;

// countdown timer //
function startTimer() {
  let timeSec = 600; displayTime(timeSec); countDown = setInterval(() => { timeSec--; displayTime(timeSec);
    if (timeSec < 0) {
      endTime(); clearInterval(countDown);
    }
  }, 1000);
} 

startTimer();

// shows time passed
function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);

  timerSpan.innerHTML = `${min < 10 ? "0" : ""}${min}:${ sec < 10 ? "0" : ""}${sec}`;
} 

//  alert message 
function endTime() {
  alert("The time has expired\nRefresh to purchase tickets");
  window.location.href = "event_registration.html";
} 

//  calculate total 
function calculateTotal() {
  let totalCost, fixedTotalCost;
  if (isNaN(input.value)) { errorMsg.textContent = "only 1 to 3 tickets can be purchased";
    invalid(input);
  } else {
    if (input.value >= minTickets && input.value <= maxTickets) {
      valid(errorMsg, input); totalCost = input.value * (costPerTicket + ticketSurcharge);
      fixedTotalCost = "$" + totalCost.toFixed(2); displayValue.setAttribute("value", fixedTotalCost);
      contactInfo.style.display = "block";
    } else {
      invalid(input); contactInfo.style.display = "none"; errorMsg.textContent = "only 1 to 3 tickets can be purchased";
      displayValue.setAttribute("value", "$0.00");
    }
  }
  return fixedTotalCost;
} 
function completePurchase() {
 
  let errors = 0;
  let amount = calculateTotal();

  if (names.test(userName.value)) {
valid(errorName, userName);
  } else {
   
    errorName.textContent = "Please enter name";
    invalid(userName);

    errors++;
  }
  
  if (emailValidation.test(userEmail.value)) {
  valid(errorEmail, userEmail);
  } else {
  
    errorEmail.textContent = "Please enter valid e-mail";
    invalid(userEmail);

    errors++;
  }
 
  if (errors === 0) {
    alert(
      `Thank you for your purchase\nthe total cost is ${amount}\nall electronic purchase validation take up to 24 hours`
    );

    //reset page
    window.location.href = "event_registration.html";

    return true;
  } else {
 
    return false;
  } 
} 


formPage.addEventListener("reset", () => { clearInterval(countDown);
  startTimer(); displayValue.setAttribute("value", "$0.00");
  contactInfo.style.display = "none";
  valid(errorName, userName);
  valid(errorEmail, userEmail);
}); 

//  color changes
function invalid(element) {
  element.style.background = "red";
} 

function valid(elemOne, elemTwo) {
  elemOne.textContent = "";
  elemTwo.style.background = "green";
} 
