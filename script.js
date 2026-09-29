// SpendWise JavaScript Foundation

// 1. Store application data using variables
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense-related data
let food = 0;
let transport = 0;
let rent = 0;
let entertainment = 0;
let savings = 0;
let utilities = 0;

// 2. Function to calculate remaining balance
function calculateRemainingBalance(budgetAmount, expensesAmount) {
    return budgetAmount - expensesAmount;
}

// 3. Function to display budget results
function displayBudgetResults() {
    remainingBalance = calculateRemainingBalance(budget, totalExpenses);

    console.log("===== SpendWise Budget Summary =====");
    console.log("Total Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + totalExpenses);
    console.log("Remaining Balance: KSh " + remainingBalance);

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }
}

// 4. Collect user input using prompts
let budgetInput = prompt("Enter your monthly budget in KSh:");

if (budgetInput !== null && budgetInput.trim() !== "") {
    budget = Number(budgetInput);
} else {
    budget = 0;
}

let expensesInput = prompt("Enter your total expenses in KSh:");

if (expensesInput !== null && expensesInput.trim() !== "") {
    totalExpenses = Number(expensesInput);
} else {
    totalExpenses = 0;
}

// 5. Perform the budget calculation
remainingBalance = calculateRemainingBalance(budget, totalExpenses);

// 6. Display the results in the browser console
displayBudgetResults();