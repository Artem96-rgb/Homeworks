// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%,
// от 500 и выше – 7%.

let sumPurchase = prompt("Enter sum"),
    sumPay,
    a = 0.03,
    b = 0.05,
    c = 0.07;

if ((sumPurchase >= 200) && (sumPurchase < 300)) {
    sumPay = sumPurchase - (sumPurchase * a);
    alert(`Your discount price = ${sumPay}`);
} else if ((sumPurchase > 300) && (sumPurchase <= 500)) {
    sumPay = sumPurchase - (sumPurchase * b);
    alert(`Your discount price = ${sumPay}`);
} else if (sumPurchase > 500) {
    sumPay = sumPurchase - (sumPurchase * c);
    alert(`Your discount price = ${sumPay}`);
} else {
    alert(`Your price = ${sumPurchase}`);
}