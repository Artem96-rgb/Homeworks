// Написать функцию, которая вычисляет факториал переданного ей числа.


function factorial(a) {
    let buf = 1;
    for (let i = 2; i <= a; i++) {
        buf = buf * i;
    }
    return buf;

}

alert(factorial(prompt("Enter number")));


