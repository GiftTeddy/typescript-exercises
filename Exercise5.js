class Calculator {
    add(a, b) {
        this.#validateNumber(a);
        this.#validateNumber(b);
        return a + b;
    }

    subtract(a, b) {
        this.#validateNumber(a);
        this.#validateNumber(b);
        return a - b;
    }

    multiply(a, b) {
        this.#validateNumber(a);
        this.#validateNumber(b);
        return a * b;
    }

    divide(a, b) {
        this.#validateNumber(a);
        this.#validateNumber(b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    #validateNumber(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error("Invalid number.");
        }
    }
}

const calculator = new Calculator();

console.log("Addition (5 + 3):", calculator.add(5, 3)); 
console.log("Subtraction (10 - 4):", calculator.subtract(10, 4)); 
console.log("Multiplication (7 * 2):", calculator.multiply(7, 2));
console.log("Division (20 / 4):", calculator.divide(20, 4));

try {
    console.log("Division (20 / 0):", calculator.divide(20, 0));
} catch (error) {
    console.error(error.message); 
}

try {
    console.log("Addition with invalid input:", calculator.add(5, "three"));
} catch (error) {
    console.error(error.message);
}
