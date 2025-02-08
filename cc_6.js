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



//Task 3-Arrow Function

const calculateBonus=(salary,performanceRating)=>
    salary*performanceRating;//create bonus function

let performanceRating=[Excellent=.2,Good=.1,Average=.05] ;//declare performance rating bonuses

console.log(`Bonus:$${calculateBonus(5000, Excellent)}`); // Expected output: "Bonus: $1000"
console.log(`Bonus:$${calculateBonus(7000, Good)}`);      // Expected output: "Bonus: $700"