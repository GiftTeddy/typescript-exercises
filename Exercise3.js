function sum(a, b) {
    return a + b;
}

function fixedNumber() {
    return 100;
}

function formatString(str, toUpperCase) {
    if (toUpperCase) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

// Examples of using the functions
console.log(sum(3, 5)); 
console.log(fixedNumber()); 
console.log(formatString("Hello", true)); 
console.log(formatString("Hello", false)); 
console.log(formatString("Hello")); 
