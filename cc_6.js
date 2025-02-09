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

console.log(`Sales Tax:$${Math.floor(calculateSalesTax(100,0.07))}`); // Expected output: "Sales Tax: $7"
console.log(`Sales Tax:$${calculateSalesTax(500,0.1)}`);  // Expected output: "Sales Tax: $50"



//Task 3-Arrow Function

const calculateBonus=(salary,performanceRating)=>
    salary*performanceRating;//create bonus function

let performanceRating=[Excellent=.2,Good=.1,Average=.05] ;//declare performance rating bonuses

console.log(`Bonus for Excellent Performance on $5000 Salary:$${calculateBonus(5000, Excellent)}`); // Expected output: "Bonus: $1000"
console.log(`Bonus for Good Performance on $7000 Salary:$${calculateBonus(7000, Good)}`);      // Expected output: "Bonus: $700"


//Task 4-Parameters and Arguments

const calculateSubscriptionCost=(plan,months,discount)=>
    plan*months-discount;//create subscription cost function

let plan=[Basic=10,Premium=20,Enterprise=50];//declare plan prices

console.log(`Basic Subscription Cost for 10 months:$${calculateSubscriptionCost(Basic, 6, 10)}`); // Expected output: "Total Cost: $50"
console.log(`Premium Subscription Cost for 12 months:$${calculateSubscriptionCost(Premium, 12, 0)}`); // Expected output: "Total Cost: $240"


//Task 5-Returning Values

const convertCurrency=(amount,exchangeRate)=>
    amount*exchangeRate

console.log(`Converted Currency:$${Math.floor(convertCurrency(100, 1.1))}`); // Expected output: "Converted Amount: $110.00"
console.log(`Converted Currency:$${convertCurrency(250, 0.85)}`); // Expected output: "Converted Amount: $212.50"


//Task 6-Higher Order Functions


let orders = [200, 600, 1200, 450, 800];
let applyBulkDiscount= orders.map(orders=>order>500);

applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
// Expected output: [200, 540, 1080, 450, 720]


//Task 7-Closures

function createExpenseTracker(tracker,expenses){
    return function(tracker){
        return expenses+(tracker+expenses+0);{
            return tracker.reduce((expenses,tracker)=>expenses+tracker.amount+tracker)
        }
    }
}

console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"