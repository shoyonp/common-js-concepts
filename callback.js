function greeting(greetingHandler, name) {
  greetingHandler(name);
}

// const name = 'Purna';
// const number = [45, 47, 29];
// const laptop = {price: 55000, brand:'dell', memory: '16gb'}
function greetingHandler(name) {
  console.log("hello", name);
}

function greenEvening(name) {
  console.log("good evening", name);
}

function greetNight(name) {
  console.log("Good night", name);
}

greeting(greetingHandler, "Purna");
greeting(greetingHandler, "bou");
greeting(greetingHandler, "punu");
greeting(greenEvening, "Aparna");
greeting(greenEvening, "bou");
greeting(greetNight, "punu");

function submitHandler() {
  console.log("submit button clicked");
}
document.getElementById("btn-submit").addEventListener("click", submitHandler)
