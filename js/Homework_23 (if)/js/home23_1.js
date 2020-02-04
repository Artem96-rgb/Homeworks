// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let age = prompt('Enter your age');

if (age <= 2) {
    alert('Child');
} else if ((age > 12) && (age < 18)) {
    alert('Teenager');
} else if ((age > 18) && (age < 60)) {
    alert('Adult');
} else if (age > 60) {
    alert('Retiree');
} else {
    alert("Dont fit");
}




