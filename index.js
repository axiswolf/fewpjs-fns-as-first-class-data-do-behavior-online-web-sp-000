/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet() {
  if (time < 12){
    console.log("Good Morning")
  } else if (time =< 17) {
    console.log("Good Afternoon")
  } else if (time > 17) {
    console.log("Good Evening")
  }
}
/* Write your implementation of displayMessage() */
function displayMessage() {

}
