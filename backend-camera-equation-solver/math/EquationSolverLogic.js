let testSample01 = '3(5)';
let testSample02 = '3+5';
let testSample03 = '3-5';
let testSample04 = '3*5';
let testSample05 = '3/5';
let testSample06 = '97382974 + 9382388942';
let testSample07 = '97382974 - 9382388942';
let testSample08 = '1+22*3+53*5*10+10+10*39*39';
let testSample09 = '1000/80/20/30';
let testSample10 = '(831+381+(391^2-3924))*3/5*2/4'



let testSamples = ['3+X2=19', '3-X2 = 13', '3+1=X', '3(5)', '5(3+5)', '3(X)=3', '5(X2)']


// console.log(testSamples)

let solvePlusSign = (equation) => {
  let equationLength = equation.length;

  for (let x = 0; x < equationLength; x++) {


  }
}

// let solveMultiplicationSign = (equation, indexes) => {
//   let equationLength = equation.length;
//   let intIndexes = [];
//   console.log(equation)
//   for (let x = 0; x < equationLength; x++) {
//     equation[x] = parseInt(equation[x])
//     if(isNaN(equation[x]) === true){
//       if(!indexes.includes(x)){
//         intIndexes.push(x)
//       }
//     }
// PROTOTYPE SOLUTION /////////////////////////////////////////////////
//   }

//   for(let y =0; y < equationLength; y++){

//   }

//   console.log(intIndexes)
// }

let solveMultiplicationSign = (equation, indexes) => {
  let equationLength = equation.length;
  let equationClean = equation;
  let intIndexes = [];
  let indexToPush = []
  console.log(equation)
  let count = 0;

  for (let x = 0; x < equationLength; x++) {

    equation[x] = parseInt(equation[x])

    if(!isNaN(equation[x])){
      
      indexToPush.push(equation[x])
      
    } else if(isNaN(equation[x])=== true && equationClean[x] != '*'){
      indexToPush = []

      intIndexes.push(indexToPush)

      // indexToPush.push(equation[x])


    } else {
      indexToPush = []

      // intIndexes.push(indexToPush)
    }

  }

  console.log(intIndexes)
}


let solveMinusSign = (equation) => {
  let equationLength = equation.length;

  for (let x = 0; x < equationLength; x++) {


  }
}
let solveObelusSign = (equation) => {
  let equationLength = equation.length;

  for (let x = 0; x < equationLength; x++) {


  }
}


let solveSamples = (equationToSolve) => {


  equationToSolve = equationToSolve.split("")
  let lengthOfEquation = equationToSolve.length;

  let hasParenthesisStart = false; // ()
  let hasParenthesisEnd = false;
  let hasPowerSign = false; // ^
  let hasObelusSign = false; // /
  let hasMultiplicationSign = false; // *
  let hasEqualSign = false; // =
  let hasPlusSign = false; // +
  let hasMinusSign = false; // -


  let parenthesisIndex = equationToSolve.indexOf('(');
  let parenthesisEndIndex = equationToSolve.indexOf(')');
  let equalIndex = equationToSolve.indexOf('=');
  let plusIndex = equationToSolve.indexOf('+');
  let minusIndex = equationToSolve.indexOf('-');
  let multiplicationIndex = equationToSolve.indexOf('*');
  let obelusIndex = equationToSolve.indexOf('/');


  let startingParenthesisIndexes = [];
  let endingParenthesisIndexes = [];
  let concatParenthesisIndexes = [];
  let plusSignIndexes = [];
  let minusSignIndexes = [];
  let multiplicationSignIndexes = [];
  let obelusSignIndexes = [];
  



  //   if (parenthesisIndex != -1) {
  //     let parenthesisLocations = []
  //     hasParenthesis = true;
  //     while(parenthesisIndex != 1){
  //         parenthesisLocations.push(parenthesisIndex)

  //     }

  //   }
  //   if (equationToSolve.includes('^')) {
  //     hasPowerSign = true;
  //   }

  if(equationToSolve.includes('(')){
    hasParenthesisStart = true;
    let index = equationToSolve.indexOf('(');
    while (index != -1) {
      startingParenthesisIndexes.push(index)
      index = equationToSolve.indexOf('(', index + 1)
    }
    // console.log(startingParenthesisIndexes)
  }

  if(equationToSolve.includes(')')){
    hasParenthesisEnd = true;
    let index = equationToSolve.indexOf(')');
    while (index != -1) {
      endingParenthesisIndexes.push(index)
      index = equationToSolve.indexOf(')', index + 1)
    }
    // console.log(endingParenthesisIndexes)

    concatParenthesisIndexes = startingParenthesisIndexes.concat(endingParenthesisIndexes)

    console.log(concatParenthesisIndexes)
  }


  if (equationToSolve.includes('/')) {
    hasObelusSign = true;
    let index = equationToSolve.indexOf('/');
    while (index != -1) {
      obelusSignIndexes.push(index)
      index = equationToSolve.indexOf('/', index + 1)
    }
    console.log(obelusSignIndexes)
  }

  if (equationToSolve.includes('*')) {
    hasMultiplicationSign = true;
    let index = equationToSolve.indexOf('*');
    while (index != -1) {
      multiplicationSignIndexes.push(index)
      index = equationToSolve.indexOf('*', index + 1)
    }
    console.log(multiplicationSignIndexes)
  }

  if (plusIndex != -1) {
    hasPlusSign = true;
    let index = equationToSolve.indexOf('+');
    while (index != -1) {
      plusSignIndexes.push(index)
      index = equationToSolve.indexOf('+', index + 1)
    }
    console.log(plusSignIndexes)

  }
  
  if (equationToSolve.includes('-')) {
    hasMinusSign = true;
    let index = equationToSolve.indexOf('-');
    while (index != -1) {
      minusSignIndexes.push(index)
      index = equationToSolve.indexOf('-', index + 1)
    }
    console.log(minusSignIndexes)
  }
  //   if (equationToSolve.includes('=')) {
  //     hasEqualSign = true;
  //   }


  if(hasMultiplicationSign){
    solveMultiplicationSign(equationToSolve, multiplicationSignIndexes)
  }





}

solveSamples(testSample08)