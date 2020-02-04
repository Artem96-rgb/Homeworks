// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
// и получает в ответ соответствующую сумму.

let USD = prompt("Enter USD");
let action = prompt("Choose currency: EUR, UAH or AZN"),
    transferEur,
    transferUah,
    transferAzn;


const EUR = 0.9,
    UAH = 24.49,
    AZN = 1.7;

switch (action) {
    case "EUR":
        transferEur = USD * EUR;
        alert(`Result = ${transferEur}`);
        break;

    case "UAH":
        transferUah = USD * UAH;
        alert(`Result = ${transferUah}`);
        break;

    case "AZN":
        transferAzn = USD * AZN;
        alert(`Result = ${transferAzn}`);
        break;
    default:
        alert('Don\'t correct');
        break;
}



