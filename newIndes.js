
function sumRange(n) {
    if (n === 1) return 1;
    return n + sumRange(n - 1);

}

function power (base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

function factorial (n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

