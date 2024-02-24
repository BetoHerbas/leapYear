import leapYear from "./leapYear";

const form = document.getElementById("leapYear-form");
const year = document.getElementById("year");
const div = document.getElementById("res-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(leapYear(year.value)){
    div.innerHTML = "<p>" + year.value + " is a leap year</p>";
  }
  else{
    div.innerHTML = "<p>" + year.value + " is not a leap year</p>";
  }
});
