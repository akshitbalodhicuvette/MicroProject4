const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    try {
      //If output has 'x', replace with * before evaluating
      output = eval(output.replace("x", "*"));
    } catch (error) {
      output = "Error";
    }
  } else if (btnValue === "RESET") {
    output = "";
  } else if (btnValue === "DEL") {
    //Remove the last character from the display
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add event listener to buttons, call calculate() on click
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
