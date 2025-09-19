// Function to calculate PAYE (Pay As You Earn) tax based on Kenyan tax bands (2023)
function calculatePAYE(taxableIncome) {
    let paye = 0;

    // If taxable income is up to 24,000 KES, tax is 10%
    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    }
    // If taxable income is between 24,001 and 32,333 KES,
    // tax is 10% on first 24,000 plus 25% on the amount above 24,000
    else if (taxableIncome <= 32333) {
        paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
    }
    // If taxable income is above 32,333 KES,
    // tax is 10% on first 24,000, 25% on next 8,333, and 30% on the rest
    else {
        paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (taxableIncome - 32333) * 0.3;
    }

    return paye; 
}

// Function to calculate NHIF (National Hospital Insurance Fund) deductions based on gross salary
function calculateNHIF(grossSalary) {
    // NHIF deductions are fixed amounts depending on salary brackets
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;

    // For gross salary 100,000 KES and above, NHIF deduction is 1700 KES
    return 1700;
}

// Function to calculate NSSF (National Social Security Fund) deductions
function calculateNSSF() {
    // Fixed NSSF deduction amount (Tier 1 + Tier 2 combined)
    return 1080;
}

// Main function to calculate net salary given basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    // Validate inputs: basic salary and benefits must be non-negative numbers
    if (basicSalary < 0 || benefits < 0) {
        throw new Error("Basic salary and benefits must be non-negative numbers.");
    }

    // Calculate gross salary as sum of basic salary and benefits
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE tax based on gross salary
    const paye = calculatePAYE(grossSalary);

    // Calculate NHIF deductions based on gross salary
    const nhif = calculateNHIF(grossSalary);

    // Calculate fixed NSSF deductions
    const nssf = calculateNSSF();

    // Calculate total deductions by summing PAYE, NHIF, and NSSF
    const totalDeductions = paye + nhif + nssf;

    // Calculate net salary by subtracting total deductions from gross salary
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        totalDeductions,
        netSalary
    };
}

// Example usage of the calculateNetSalary function
const basicSalary = 50000;  // Example basic salary input 
const benefits = 10000;     // Example benefits input 


//This is a try-catch block used for error handling in JavaScript.
//The code inside the try block is executed normally.
//The catch block receives the error object and handles it gracefully, preventing the program from crashing.

try {
    // Call the function with example inputs and store the result
    const result = calculateNetSalary(basicSalary, benefits);

    // Output the results to the console with formatting
    console.log(`Gross Salary: KES ${result.grossSalary.toFixed(2)}`);
    console.log(`PAYE (Tax): KES ${result.paye.toFixed(2)}`);
    console.log(`NHIF Deductions: KES ${result.nhif.toFixed(2)}`);
    console.log(`NSSF Deductions: KES ${result.nssf.toFixed(2)}`);
    console.log(`Total Deductions: KES ${result.totalDeductions.toFixed(2)}`);
    console.log(`Net Salary: KES ${result.netSalary.toFixed(2)}`);
} catch (error) {
    // If input validation fails, print the error message
    console.error(error.message);
}