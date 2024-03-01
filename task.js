//01-02-24

// Task Statements:
// Calculate Total Inventory Value:

// Iterate over the products array.
// For each product, calculate its total value (quantity * price).
// Sum up the total values to get the total inventory value.
// Print Details of Each Product:

// Iterate over the products array.
// Print the details of each product, including its quantity, price, and total value.
// Check and Print Out-of-Stock Products:

let product=["Laptop T300", "Charger 45W","Pendrive","Mouse T20"];
let quantity=[1,1,2,1];
let price=[60000,2000,1500,1000];


let total_price=[];
for(let i=0;i<quantity.length;i++){
    total_price[i]=quantity[i]*price[i];
}
let total=0;
for (const k of total_price) {
    total+=k;
}


console.log("Item\t\tquantity\tNet price");
for(let i=0;i<product.length;i++){
    console.log(`${product[i]}\t\t${quantity[i]}\t\t${total_price[i]}`);
}
console.log("Total Amount:\t\t  ",total);

console.log("\nProducts:");
for (const key of product) {
    console.log(key);
}
let stock=[1,10,20,15];
console.log("\nItem\t\tquantity\tIn_stock\tPrice");
for(let i=0;i<product.length;i++){
    console.log(`${product[i]}\t\t${quantity[i]}\t\t${stock[i]-quantity[i]}\t\t    ${price[i]}`);
}
let a=false;
for(let i=0;i<product.length;i++){
    if(stock[i]==0){
        console.log("OUT OF STOCK",product[i]);
        a=true;
    }
  }
  if(a==false){
    console.log("No product is out of stock");
  }



// Iterate over the products array.
// Check if the quantity of a product is zero.
// If zero, print a message indicating the product is out of stock.
// Identify Product with Highest Price:

// Initialize a variable to store the product with the highest price.
// Iterate over the products array.
// Compare the price of each product and update the variable if a higher price is found.
// Print the details of the product with the highest price.
// Prompt User for Product Name and Search:

// Prompt the user to enter a product name.
// Iterate over the products array.
// Check if the entered product name matches any in the array.
// If found, print the details of the product; otherwise, print "Product not found."
// let price = [10,20,30,40];
// let quantity = [1,2,2,1];
// let product = ["pen","pencil","eraser","sharpner"];
let fixed_price = 35;
for(let i=0;i<4;i++){
    if(price[i]>fixed_price){
        fixed_price = price[i];
        console.log(`product ${i+1} has the highest price i.e ` + fixed_price);
    }
}
let name1 = "Laptop T300";
let flag = false;

for(let i=0;i<product.length;i++){
    if(product[i]===name1){
        flag = true;
    }
}
if(flag == true){
    console.log("Product found");
}
else{
    console.log("Product not found");
}