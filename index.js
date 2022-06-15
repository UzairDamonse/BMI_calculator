function bmiCalculate() {
  let height = document.getElementById("height").value;

  let heightInMetres = height / 100;

  let heightSquared = heightInMetres * heightInMetres;

  let weight = document.getElementById("weight").value;

  let Calculate = (weight / heightSquared).toFixed(2);

  let result = Calculate + ".";

  if (Calculate <= 18.5) {
    result += " You are underweight. ";
  } else if (Calculate > 18.5 && Calculate <= 24.9) {
    result += " You have normal weight.";
  } else if (Calculate > 24.9 && Calculate <= 29.9) {
    result += " You are overweight.";
  } else if (Calculate > 30) {
    result += " You are obese.";
  }

  document.getElementById("output").innerHTML = "Your BMI is " + result;
}

function clear() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
}
