// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных
// и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let number = prompt("Enter ten numbers");

let buf = "";

while (number-- > 0) {
    if (number % 2 == 0) {
        buf += number + " ";
    }
}


alert(buf);