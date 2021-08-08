/* Declare an Array and find the number of element, Update element in 4th Position, add and remove element, find spesific element in the array */

myArray = [23, 45, 12, 78, 56];
let findElement = 35;
for (let i = 0; i < myArray.length; i++) {
    let position = i;
    let elements = myArray[position];
    if (elements == findElement) {
        console.log(elements + " -- Elements Present in the Array");
        continue;
    }
    if (position == 4) {
        elements = 50;
    }
    console.log(elements);
}
myArray.push(60);
console.log(myArray);
myArray.pop();
console.log(myArray);