// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла.
// После вопросов выведите пользователю количество набранных баллов.

let questionOne = alert("Скольок колес у машины:  2  4  6"),
    answerOne = +prompt("Ваш ответ"),
    resultOne = true,

    questionTwo = alert("Скольок колес у велика:  2  4  6"),
    answerTwo = +prompt("Ваш ответ"),
    resultTwo = true,

    questionThree = alert("Скольок колес у гелика:  2  4  5"),
    answerThree = +prompt("Ваш ответ"),
    resultThree = true,
    generalResult;

if (answerOne == 4) {
    resultOne == true;

} else
    resultOne == false;




if (answerTwo == 2) {
    resultTwo == true;

} else
    resultTwo == false;




if (answerThree == 5) {
    resultThree == true;

} else
    resultThree == false;



if ((resultOne == true) && (resultTwo == true) && (resultThree == true)) {
    alert("result = 6");
} else ((resultOne == false) && (resultTwo == false) && (resultThree == false))
alert("result = 0");
