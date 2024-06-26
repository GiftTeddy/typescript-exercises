function sum(a: number, b: number): number {
    return a + b;
}

function fixedNumber(): number {
    return 100;
}

function formatString(str: string, toUpperCase?: boolean): string {
    if (toUpperCase) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}
