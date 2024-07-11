import inquirer from "inquirer";

const solution = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operator to perform your operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);


/// conditional statement:
if(solution.operator === "Addition") {
  console.log(solution.firstnumber + solution.secondnumber);  
}
else if (solution.operator === "Subtraction") {
    console.log(solution.firstnumber - solution.secondnumber);  
  }
  else if (solution.operator === "Multiplication") {
    console.log(solution.firstnumber * solution.secondnumber);  
  }
  else if (solution.operator === "Division") {
    console.log(solution.firstnumber / solution.secondnumber);  
  } else {
     console.log("Plz select valid operator")
  }