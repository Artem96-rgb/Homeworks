// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let a = prompt("Enter first number"),
    b = prompt("Enter second number"),
    c = prompt("Enter third number");


if ((a == b) || (a == c)) {
    alert("There are the same numbers");
} else if ((b == a) || (b == c)) {
    alert("There are the same numbers");
} else if ((c == a) || (c == b)) {
    alert("There are the same numbers");
} else {
    alert("no the same numbers");
}