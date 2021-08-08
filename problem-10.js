// You have an array of Number. print only the number bigger then 80

numberArray = [100, 20, 90, 50, 80, 110, 10, 190, 15, 200, 1, 500];
for (let i = 0; i < numberArray.length; i++) {
    let elements = numberArray[i];
    if (elements > 80) {
        console.log(elements);
    }
}