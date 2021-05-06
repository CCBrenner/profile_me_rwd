// Creates date object for the date provided below
var thisDate = new Date();

// sets variable dateString to the string of the thisDate Date object declared directly above
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dateString = thisDate.toLocaleDateString('us-EN', options);

// Declares the HTML code to be inserted in the HTML document by using concatenation of strings and a variable
var dateHTML = "<h3>Today is " + dateString + ".</h3><p>Have a great day!</p><br/>";

// Selects the element with ID unionToday and inserts the getEvent() funciton's return value before the end of the selected element
document.getElementById("today").insertAdjacentHTML("afterbegin", dateHTML);