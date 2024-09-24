let  name = "Aruzhan";
let age = "21";
alert(name+ " " + age)

let num1 = 20;
let num2 = 7;
console.log(num1%num2);

let isTrue = confirm("Согласны ли вы получать уведомления?");
console.log(Boolean(isTrue));

let yourAge = prompt("Укажите свой возраст");
console.log(Boolean(yourAge));

let number = prompt("Введите число");
let number2= number ** 3;
alert("Ваше число в кубе:" + " " + String(number2));

let color = prompt("Напишите свой любимый цвет")
let color2= prompt("Напишите свой второй любимый цвет")
alert("Ваши любимые цвета:" + color + " " + "и" + " " + color2);

let numberIn1 = Number(prompt("Введите первое число"));
let numberIn2 = Number(prompt("Введите второе число"));
let numberIn3 = Number(prompt("Введите третье число"));
let average = (numberIn1 + numberIn2 + numberIn3) / 3;
alert("Среднее этих трех чисел: " + average);

let hours = Number(prompt("Введите часы"));
let minutes = Number(prompt("Введите минуты"));
let seconds = Number(prompt("Введите секунды"));
let totalSeconds = (hours * 3600) + (minutes * 60) + (seconds);
alert("Общее кол-во секунд: " + totalSeconds);

let celsius = Number(prompt("Введите температуру в градусах Цельсия"));
let fahrenheit = (celsius * 9/5) + 32;  
let kelvin = celsius + 273.15; 
alert("Температура по Фаренгейту: " + fahrenheit + " ,Температура по Кельвину: " + kelvin);

let radius = Number(prompt("Введите радиус круга"));
const pi = 3.14;
let area = pi * (radius**2);
alert("Площадь круга: " + area);

