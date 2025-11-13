// Массив красивых цветов
const colors = [
    "red", "blue", "green", "yellow", "black", "white", "purple", "pink", 
    "brown", "gray", "orange", "cyan", "magenta", "lime", "teal", "navy",
    "coral", "indigo", "violet", "turquoise", "salmon", "lavender", "peach",
    "crimson", "emerald", "sapphire", "ruby", "gold", "silver", "beige"
];

// Объект автомобиля
const car = {
    name: "Volvo",
    model: "XC90",
    year: 2020,
    color: "black"
};

// Информация об автомобиле
const carInfo = `${car.name} ${car.model} ${car.year} ${car.color}`;
console.log(carInfo);

// Функция для смены цвета кнопки
let colorIndex = 0;
const button = document.getElementById("asds");

function changeColor() {
    button.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;
    console.log(`Button clicked ${colorIndex} times.`);
}

// Событие клика на кнопку
button.addEventListener("click", changeColor);

// Отображение информации в заголовке
const father = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

document.getElementById("demo").innerHTML = 
    `My father is ${father.age} years old.`;

// Сообщение в консоль
console.log("I like JavaScript!");