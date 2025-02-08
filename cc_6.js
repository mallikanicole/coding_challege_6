//Task 1-Function Declaration

let calculateProfit=function
profit(costPrice, sellingPrice, unitsSold){
    return ((sellingPrice-costPrice)*unitsSold);
};//create profit function

console.log(`Profit:$${calculateProfit(20, 30, 100)}`); // Expected output: "Total Profit: $1000"
console.log(`Profit:$${calculateProfit(50, 70, 200)}`); // Expected output: "Total Profit: $4000"


//Task 2-Function Expression
let calculateSalesTax=function
salesTax(amount, taxRate){
    return(amount*taxRate)
};//create sales tax function

console.log(`Sales Tax:$${calculateSalesTax(100,0.07)}`); // Expected output: "Sales Tax: $7"
console.log(`Sales Tax:$${calculateSalesTax(500,0.1)}`);  // Expected output: "Sales Tax: $50"
