function onlyPositive(number) {
    for (const elements of number) {
        if (elements < 0) {
            break;
        }
        console.log(elements);
    }
}

let numberArray = [21, 23, 45, 35, -2, 45, -3, 32];
console.log(onlyPositive(numberArray));