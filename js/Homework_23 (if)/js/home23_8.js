// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// Формула длины окружности: l = 2πr,


const pi = 3.14;
let long = +prompt('Введите длину окружности'),
    perimetrSquare = +prompt('Введите периметр квадрата'),
    radiusCircle = long / 2 * pi,
    diametrCircle = radiusCircle * 2,
    sideSquare = perimetrSquare / 4;

if (diametrCircle <= sideSquare) {
    alert("Fit");
} else {
    alert("don\`t fit");
}




