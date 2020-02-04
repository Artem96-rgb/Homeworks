// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число,
// равное сумме всех своих собственных делителей.


const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));