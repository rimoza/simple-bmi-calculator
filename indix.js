// BMI = weight / (height/100 * height/100 )

document.getElementById("submit").addEventListener("click", bmiCalculator);

function bmiCalculator() {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  let bmi;
  let newHeight = parseFloat(height / 100);
  bmi = weight / (newHeight * newHeight);
  bmi = bmi.toFixed(1);
  console.log(bmi);

  if (
    document.getElementById("height").value === "" &&
    document.getElementById("weight").value === ""
  ) {
    document.getElementById("result").innerHTML =
      "Please inter Height and Weight";
  } else {
    document.getElementById("result").innerHTML = bmi;
  }
}
