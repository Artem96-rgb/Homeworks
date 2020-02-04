// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр,
// то она вычисляет площадь квадрата.



function square() {
    let a = prompt("enter long");
    let b = prompt("enter width");
    a = a || 1;
    b = b || 1;
    return a * b;
}

console.log(square());