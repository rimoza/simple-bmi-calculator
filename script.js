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

let h2 = document.createElement("h2");
h2.innerHTML = "BMI Weight Guide";
document.getElementById("weightguide").appendChild(h2);

let pragh1 = document.createElement("p");
pragh1.innerHTML = " Under Weight = less than 18.6 ";
document.getElementById("weightguide").appendChild(pragh1);

let pragh2 = document.createElement("p");
pragh2.innerHTML = " Normal Range = 18.6 and 24.9  ";
document.getElementById("weightguide").appendChild(pragh2);
  
let pragh3 = document.createElement("p");
pragh3.innerHTML = " Overweight = Greater than 24.9 ";
document.getElementById("weightguide").appendChild(pragh3);