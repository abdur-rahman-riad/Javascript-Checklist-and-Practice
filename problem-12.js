// Declare an object and change any properties

let products = [
    { productName: "Acer Laptop", price: 60000 },
    { productName: "DCL Laptop", price: 40000 },
    { productName: "htc", price: 22000 },
    { productName: "Pendrive", price: 1300 }
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
products[0].productName = "Acer Core i5";
console.log(products);