// Write a Function that takes three numbers and return multiplication of the three numbers
function multiThree(firstNumber, secondNumber, thirdNumber) {
    let initialCalculation = firstNumber * secondNumber;
    let finalCalculation = initialCalculation * thirdNumber;
    return finalCalculation;
}

console.log(multiThree(3, 10, 3));