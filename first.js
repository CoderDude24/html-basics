function bmi(mass, height) {
  return mass / height ** 2; // heieght ** 2 = (heieght * heieght)
}

function bmiComparison(markBmi, johnBmi) {
  console.log("Mark's BMI is higher then John's BMI.");

  let bmiCheck = markBmi > johnBmi;

  if (bmiCheck == true) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function printvalue() {
  console.log("This is Assignment 13");
  var markBmi;
  var johnBmi;

  // Case 1
  console.log(
    "Data 1: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall. (True/False)"
  );
  // Calculating BMI
  var mark = { mass: 78, height: 1.69 };
  markBmi = bmi(mark.mass, mark.height);
  console.log("Mark's BMI: ", markBmi);

  var john = { mass: 92, height: 1.95 };
  johnBmi = bmi(john.mass, john.height);
  console.log("John's BMI: ", johnBmi);

  bmiComparison(markBmi, johnBmi);

  // Case 2
  console.log(
    "Data 2: Marks weights 95kg and is 1.88m tall. John weights 85kg and is 1.76m tall. (True/False)"
  );
  // Calculating BMI
  mark = { mass: 95, height: 1.88 };
  markBmi = bmi(mark.mass, mark.height);
  console.log("Mark's BMI: ", markBmi);

  john = { mass: 85, height: 1.76 };
  johnBmi = bmi(john.mass, john.height);
  console.log("John's BMI: ", johnBmi);
  bmiComparison(markBmi, johnBmi);
}

printvalue();