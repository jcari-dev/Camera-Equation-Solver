let testSample01 = "3(5)";
let testSample02 = "3+5";
let testSample03 = "3-5";
let testSample04 = "3*5*93*93*8328";
let testSample05 = "3/5";
let testSample06 = "97382974 + 9382388942";
let testSample07 = "97382974-9382388942";
let testSample08 = "1+3-522*3+53*5*10+10+39*2*8+19-823+3284+8*3/2";
let testSample09 = "1000/80/20/30";
let testSample10 = "(831+381+(391^2-3924))√*3/5*2/4";

let testSamples = [
  "3+X2=19",
  "3-X2 = 13",
  "3+1=X",
  "3(5)",
  "5(3+5)",
  "3(X)=3",
  "5(X2)",
];
//ANCHOR Addition
let solvePlusSign = (equation, indexes) => {
  let arrToSum = [];
  let indexToPush = [];

  for (let y in equation) {
    if (!isNaN(parseInt(equation[y])) || equation[y] === "+" || equation[y] === ".") {
      indexToPush.push(equation[y]);
    }

    if (isNaN(equation[y])) {
      if (indexToPush.length != 0) {
        arrToSum.push(indexToPush);
      }
      if (indexToPush.slice(-1)[0] !== "+" && equation[y] !== ".") {
        indexToPush = [];
      }
    }
  }

  arrToSum = arrToSum.filter((index) => index.includes("+"));

  let additionOnly = [...new Set(arrToSum)];

  let additionOnlyToPush = [];

  for (let x in additionOnly) {
    if (additionOnly[x] != "+") {
      additionOnlyToPush.push(additionOnly[x]);
    } else {
      additionOnlyToPush = [];
    }
  }

  additionOnly = additionOnly.join(" ");
  additionOnly = additionOnly.split(" ");
  additionOnly = additionOnly.map((item) => item.replace(/,/g, ""));
  let finalArrayNumbers = [];
  let sum = 0;
  let arrayToCompareToEquation = [];

  for (let index = 0; index < additionOnly.length; index++) {
    arrayToCompareToEquation.push(additionOnly[index]);
    additionOnly[index] = additionOnly[index].split("+").map(Number);
    sum = additionOnly[index].reduce((a, b) => a + b, 0);
    finalArrayNumbers.push(sum);
  }

  console.log(equation)
  equation = equation.join("");

  console.log(equation)
  for (
    let indexToReplace = 0;
    indexToReplace < arrayToCompareToEquation.length;
    indexToReplace++
  ) {
    equation = equation.replace(
      arrayToCompareToEquation[indexToReplace],
      finalArrayNumbers[indexToReplace]
    );
  }
  console.log(equation)
  equation = equation.split("");
  if (indexes[6].length !== 0) {
    // DO SUBSTRACTION FUNCTION
    // console.log("got here from addition to subtraction");
    return solveMinusSign(equation, indexes);
  } else {
    equation = equation.join("");

    return equation;
  }
};

//ANCHOR Subtraction
let solveMinusSign = (equation, indexes) => {
  let arrToSub = [];
  let indexToPush = [];

  for (let y in equation) {
    if (!isNaN(parseInt(equation[y])) || equation[y] === "-" || equation[y] === ".") {
      indexToPush.push(equation[y]);
    }
    if (isNaN(equation[y])) {
      if (indexToPush.length != 0) {
        arrToSub.push(indexToPush);
      }
      if (indexToPush.slice(-1)[0] !== "-" && equation[y] !== ".") {
        indexToPush = [];
      }
    }
  }
  // }

  arrToSub = arrToSub.filter((index) => index.includes("-"));

  let subOnly = [...new Set(arrToSub)];

  let subOnlyToPush = [];

  for (let x in subOnly) {
    if (subOnly[x] != "-") {
      subOnlyToPush.push(subOnly[x]);
    } else {
      subOnlyToPush = [];
    }
  }

  subOnly = subOnly.join(" ");
  subOnly = subOnly.split(" ");
  subOnly = subOnly.map((item) => item.replace(/,/g, ""));
  let finalArrayNumbers = [];
  let sub = 0;
  let arrayToCompareToEquation = [];

  for (let index = 0; index < subOnly.length; index++) {
    arrayToCompareToEquation.push(subOnly[index]);
    subOnly[index] = subOnly[index].split("-").map(Number);
    sub = subOnly[index].reduce((a, b) => a - b);
    finalArrayNumbers.push(sub);
  }

  equation = equation.join("");
  for (
    let indexToReplace = 0;
    indexToReplace < arrayToCompareToEquation.length;
    indexToReplace++
  ) {
    equation = equation.replace(
      arrayToCompareToEquation[indexToReplace],
      finalArrayNumbers[indexToReplace]
    );
  }
  // console.log(equation)
  return equation;
};

//ANCHOR Division
let solveObelusSign = (equation, indexes) => {
  let arrToDiv = [];
  let indexToPush = [];

  for (let y in equation) {
    if (!isNaN(parseInt(equation[y])) || equation[y] === "/" || equation[y] === ".") {
      indexToPush.push(equation[y]);
    }

    if (isNaN(equation[y])) {
      if (indexToPush.length != 0) {
        arrToDiv.push(indexToPush);
      }
      if (indexToPush.slice(-1)[0] !== "/" && equation[y] !== ".") {
        indexToPush = [];
      }
    }
  }
  // }

  arrToDiv = arrToDiv.filter((index) => index.includes("/"));

  let divOnly = [...new Set(arrToDiv)];

  let divOnlyToPush = [];

  for (let x in divOnly) {
    if (divOnly[x] != "/") {
      divOnlyToPush.push(divOnly[x]);
    } else {
      divOnlyToPush = [];
    }
  }

  divOnly = divOnly.join(" ");
  divOnly = divOnly.split(" ");
  divOnly = divOnly.map((item) => item.replace(/,/g, ""));
  let finalArrayNumbers = [];
  let div = 0;
  let arrayToCompareToEquation = [];

  for (let index = 0; index < divOnly.length; index++) {
    arrayToCompareToEquation.push(divOnly[index]);
    divOnly[index] = divOnly[index].split("/").map(Number);
    div = divOnly[index].reduce((a, b) => a / b);
    finalArrayNumbers.push(div);
  }
  equation = equation.join("");
  // console.log(equation)
  for (
    let indexToReplace = 0;
    indexToReplace < arrayToCompareToEquation.length;
    indexToReplace++
  ) {
    equation = equation.replace(
      arrayToCompareToEquation[indexToReplace],
      finalArrayNumbers[indexToReplace]
    );
  }
  equation = equation.split("");
  indexes[4] = indexes[4] = [] 
  if (indexes[3].length !== 0){
    return solveMultiplicationSign(equation, indexes)
  } else if (indexes[5].length !== 0) {
    // DO SUM FUNCTION
    // console.log("got here going from obelus to plus sign");
    return solvePlusSign(equation, indexes);
  } else if (indexes[6].length !== 0) {
    // DO SUBTRACTION FUNCTION
    return solveMinusSign(equation, indexes);
  } else {
    equation = equation.join("");
    return equation;
  }
};

//ANCHOR Multiplication
let solveMultiplicationSign = (equation, indexes) => {
  // console.log(equation)
  let arrToMulti = [];
  let indexToPush = [];
  for (let y in equation) {
    if (!isNaN(parseInt(equation[y])) || equation[y] === "*" || equation[y] === ".") {
      indexToPush.push(equation[y]);
    }

    if (isNaN(equation[y])) {
      if (indexToPush.length != 0) {
        arrToMulti.push(indexToPush);
      }
      if (indexToPush.slice(-1)[0] !== "*" && equation[y] !== ".") {
        indexToPush = [];
      }
    }
  }

  console.log(arrToMulti)

  arrToMulti = arrToMulti.filter((index) => index.includes("*"));

  let multiplicationOnly = [...new Set(arrToMulti)];

  let multiplicationOnlyToPush = [];

  for (let x in multiplicationOnly) {
    if (multiplicationOnly[x] != "*") {
      multiplicationOnlyToPush.push(multiplicationOnly[x]);
    } else {
      // multiplicationOnlyFinal.push(multiplicationOnlyToPush)
      multiplicationOnlyToPush = [];
    }
  }

  multiplicationOnly = multiplicationOnly.join(" ");
  console.log(multiplicationOnly)
  multiplicationOnly = multiplicationOnly.split(" ");
  multiplicationOnly = multiplicationOnly.map((item) => item.replace(/,/g, ""));
  let finalArrayNumbers = [];
  let product = 0;
  let arrayToCompareToEquation = [];

  for (let index = 0; index < multiplicationOnly.length; index++) {
    arrayToCompareToEquation.push(multiplicationOnly[index]);
    multiplicationOnly[index] = multiplicationOnly[index]
      .split("*")
      .map(Number);
    product = multiplicationOnly[index].reduce((a, b) => a * b, 1);
    finalArrayNumbers.push(product);
  }

  equation = equation.join("");
  console.log(equation)
  for (
    let indexToReplace = 0;
    indexToReplace < arrayToCompareToEquation.length;
    indexToReplace++
  ) {
    equation = equation.replace(
      arrayToCompareToEquation[indexToReplace],
      finalArrayNumbers[indexToReplace]
    );
  }

  equation = equation.split("");
  indexes[3] = indexes[3] = [];
  if (indexes[4].length !== 0) {
    // DO DIVISION FUNCTION
    return solveObelusSign(equation, indexes);
  } else if (indexes[5].length !== 0) {
    // DO SUM FUNCTION
    return solvePlusSign(equation, indexes);
  } else if (indexes[6].length !== 0) {
    // DO SUBTRACTION FUNCTION
    return solveMinusSign(equation, indexes);
  } else {
    equation = equation.join("");
    return equation;
  }
};

//ANCHOR Master Sorter Equation
let solveEquation = (equationToSolve) => {
  equationToSolve = equationToSolve.split("");
  equationToSolve = equationToSolve.filter(item => item !== " ")


  let hasParenthesisStart = false; // ()
  let hasParenthesisEnd = false;
  let hasPowerSign = false; // ^
  let hasObelusSign = false; // /
  let hasMultiplicationSign = false; // *
  let hasEqualSign = false; // =
  let hasPlusSign = false; // +
  let hasMinusSign = false; // -

  let startingParenthesisIndexes = [];
  let endingParenthesisIndexes = [];
  let concatParenthesisIndexes = [];
  let plusSignIndexes = [];
  let minusSignIndexes = [];
  let multiplicationSignIndexes = [];
  let obelusSignIndexes = [];
  let powerSignIndexes = [];
  let sqrtSignIndexes = [];

  if (equationToSolve.includes("^")) {
    hasPowerSign = true;
    let index = equationToSolve.indexOf("^");
    while (index != -1) {
      powerSignIndexes.push(index);
      index = equationToSolve.indexOf("^", index + 1);
    }

    // console.log(powerSignIndexes)
  }

  if (equationToSolve.includes("(")) {
    hasParenthesisStart = true;
    let index = equationToSolve.indexOf("(");
    while (index != -1) {
      startingParenthesisIndexes.push(index);
      index = equationToSolve.indexOf("(", index + 1);
    }
    // console.log(startingParenthesisIndexes)
  }

  if (equationToSolve.includes(")")) {
    hasParenthesisEnd = true;
    let index = equationToSolve.indexOf(")");
    while (index != -1) {
      endingParenthesisIndexes.push(index);
      index = equationToSolve.indexOf(")", index + 1);
    }
    // console.log(endingParenthesisIndexes)

    concatParenthesisIndexes = startingParenthesisIndexes.concat(
      endingParenthesisIndexes
    );

    // console.log(concatParenthesisIndexes)
  }

  if (equationToSolve.includes("/")) {
    hasObelusSign = true;
    let index = equationToSolve.indexOf("/");
    while (index != -1) {
      obelusSignIndexes.push(index);
      index = equationToSolve.indexOf("/", index + 1);
    }
    // console.log(obelusSignIndexes)
  }

  if (equationToSolve.includes("*")) {
    hasMultiplicationSign = true;
    let index = equationToSolve.indexOf("*");
    while (index != -1) {
      multiplicationSignIndexes.push(index);
      index = equationToSolve.indexOf("*", index + 1);
    }
    // console.log(multiplicationSignIndexes)
  }

  if (equationToSolve.includes("+")) {
    hasPlusSign = true;
    let index = equationToSolve.indexOf("+");
    while (index != -1) {
      plusSignIndexes.push(index);
      index = equationToSolve.indexOf("+", index + 1);
    }
    // console.log(plusSignIndexes)
  }

  if (equationToSolve.includes("-")) {
    hasMinusSign = true;
    let index = equationToSolve.indexOf("-");
    while (index != -1) {
      minusSignIndexes.push(index);
      index = equationToSolve.indexOf("-", index + 1);
    }
    // console.log(minusSignIndexes)
  }
  if (equationToSolve.includes("=")) {
    hasEqualSign = true;
    let index = equationToSolve.indexOf("-");
    while (index != -1) {
      sqrtSignIndexes.push(index);
      index = equationToSolve.indexOf("-", index + 1);
    }
    //   console.log(sqrtSignIndexes)
  }

  let masterSignIndexes = [
    concatParenthesisIndexes, // 0
    powerSignIndexes, // 1
    sqrtSignIndexes, // 2
    multiplicationSignIndexes, // 3
    obelusSignIndexes, // 4
    plusSignIndexes, // 5
    minusSignIndexes, // 6
  ];

  // console.log(masterSignIndexes)

  if(masterSignIndexes[3][0] < masterSignIndexes[4][0] && hasMultiplicationSign === true && hasObelusSign === true) {
    return solveMultiplicationSign(equationToSolve, masterSignIndexes)
  } else if (masterSignIndexes[3][0] > masterSignIndexes[4][0] && hasMultiplicationSign === true && hasObelusSign === true){
    return solveObelusSign(equationToSolve, masterSignIndexes)
  } else if (hasMultiplicationSign) {
    return solveMultiplicationSign(equationToSolve, masterSignIndexes);
  } else if (hasObelusSign) {
    return solveObelusSign(equationToSolve, masterSignIndexes);
  } else if (hasPlusSign) {
    return solvePlusSign(equationToSolve, masterSignIndexes);
  } else if (hasMinusSign) {
    return solveMinusSign(equationToSolve, masterSignIndexes);
  }
};

// console.log(solveEquation("100/10*5"));

module.exports = {solveEquation};