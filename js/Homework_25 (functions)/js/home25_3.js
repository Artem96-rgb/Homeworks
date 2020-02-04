// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


let one = prompt("Enter number one"),
    two = prompt("Enter number two"),
    three = prompt("Enter number three");


function transform() {
    return one + two + three;
}

console.log(transform());