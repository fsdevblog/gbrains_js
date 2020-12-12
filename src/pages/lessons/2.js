import React from 'react';
import HighLight from '../../components/Hightlight';
import TaskExample1 from '../../components/Task2_3';
import Task from '../../components/Task2_8';
import wtfJpg from '../../images/wtf.jpg';

const task1 = `var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3`;

const task2 = `var a = 2;
var x = 1 + (a *= 2);`;

const task3 = `если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.`;

// eslint-disable-next-line camelcase
const task31 = `const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const a = getRandomInt(-15, 15)
const b = getRandomInt(-15, 15)

if(a >= 0 && b >= 0 ) { // если a и b положительные, вывести их разность (ноль считаем положительным)
  console.log(a - b)
} else if (a < 0 && b < 0) { // если а и b отрицательные, вывести их произведение
  console.log(a * b)
} else { // если а и b разных знаков, вывести их сумму
  console.log(a + b)
}`;

const task4 = `const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)
let a = getRandomInt(0, 15);
console.log(a)
switch(a) {
  case 0:
    console.log(a++)
  case 1:
    console.log(a++)
  case 2:
    console.log(a++)
  case 3:
    console.log(a++)
  case 4:
    console.log(a++)
  case 5:
    console.log(a++)
  case 6:
    console.log(a++)
  case 7:
    console.log(a++)
  case 8:
    console.log(a++)
  case 9:
    console.log(a++)
  case 10:
    console.log(a++)
  case 11:
    console.log(a++)
  case 12:
    console.log(a++)
  case 13:
    console.log(a++)
  case 14:
    console.log(a++)
  case 15: {
    console.log(a)
  }
}`;

const task5 = `const plus = (a, b) => (a + b);
const minus = (a, b) => (a - b);
const division = (a, b) => (a / b);
const multiply = (a, b) => (a * b);`;

const task6 = `const mathOperation = (arg1, arg2, operation) => {
  switch (operation) {
    case '+':
    case 'plus': {
      return plus(arg1, arg2);
    }
    case '-':
    case 'minus': {
      return minus(arg1, arg2);
    }

    case '/':
    case 'division': {
      return division(arg1, arg2);
    }

    case '*':
    case 'multiply': {
      return multiply(arg1, arg2);
    }

    default: {
      throw new Error('unknown operation');
    }
  }
};

console.log(mathOperation(1, 2, '+'));
console.log(mathOperation(1, 2, 'plus'));
console.log(mathOperation(1, 2, 'asdf')); // unknown operation`;

const task7 = `console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true`;

const task8 = `const power = (val, pow) => {
  if (pow === 1) return val;
  return val * power(val, pow - 1);
};

console.log(power(5, 5) === 5 ** 5); // true
console.log(power(2, 2) === 2 ** 2); // true
console.log(power(12, 12) === 12 ** 12); // true`;

export default function Lesson2() {
  return (
    <div>
      <h3>1. Дан код: </h3>
      <HighLight source={task1} lineNumbers />
      <h3>Почему код даёт именно такие результаты?</h3>

      <p>
        Во всех ЯП что мне доводилось сталкиваться, в том числе в яваскрипте, есть такое понятие
        как префиксный и постфиксный инкримент/декримент.
      </p>

      <p>
        Как это работает? Префиксный инкримент/декримент - сначала возвращает значение, потом
        изменяет значение переменнной, а постфиксный - наоборот, сначала возвращает, потом изменяет.
      </p>

      <h3>2. Чему будет равен x в примере ниже?</h3>

      <HighLight source={task2} />
      x Будет равен пяти, очевидно же.
      {' '}
      <HighLight inline>a *= 2 // 4</HighLight>, а <HighLight inline>4 + 1</HighLight>
      {' '}будет равно пяти

      <h3>
        3. Объявить две целочисленные переменные a и b и задать им произвольные начальные
        значения. Затем написать скрипт, который работает по следующему принципу:
      </h3>
      <pre style={{ fontSize: 12 }}>
        {task3}
      </pre>

      <HighLight source={task31} />
      <TaskExample1 />

      <h3>
        4. Присвоить переменной а значение в промежутке [0..15].
        С помощью оператора switch организовать вывод чисел от a до 15.
      </h3>

      <HighLight source={task4} />

      <h3>
        5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
        Обязательно использовать оператор return.
      </h3>

      <HighLight source={task5} />
      Данный синтаксис позволяет не вызывать конструкцию
      {' '}<HighLight inline source="return" /> явно.

      <h3>
        6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
        где arg1, arg2 – значения аргументов, operation – строка с названием операции.
        В зависимости от переданного значения операции выполнить одну из арифметических операций
        (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
      </h3>
      Чтоб не захлямлять страницу, будем использовать уже написанные функции из пункта 5.

      <HighLight source={task6} />

      <h3>7. *Сравнить null и 0. Попробуйте объяснить результат.</h3>
      Сравниваем...
      <HighLight source={task7} />
      Интересное поведение, null не больше нуля и не равен нулю, но при этом - больше или равен
      нулю.

      <img
        src={wtfJpg}
        style={{ maxWidth: 400, display: 'block' }}
        alt="wtf"
      />
      Все дело в работе операторов сравнения. Подробно можно почитать
      {' '}
      <a href="https://habr.com/ru/company/ruvds/blog/337732/" rel="noreferrer" target="_blank">здесь</a>
      <br />
      Вкратце, равенства сравнения <HighLight source="==" inline /> и
      {' '}<HighLight source="> < >= <=" inline /> работают по разному.
      Выражение <HighLight source="null >= 0" inline /> истинно потому что происходит преобразование
      {' '}<HighLight source="null" inline /> в число.<br />
      При сравнении нестрогим равенством <HighLight inline source="==" /> значения <HighLight inline source="null" /> преобразование
      не производится, поэтому <HighLight inline source="null == 0" /> ложно.

      <h3>
        8. С помощью рекурсии организовать функцию возведения числа в степень.
        Формат: <HighLight source="function power(val, pow)" inline />, где <HighLight source="val" inline /> –
        заданное число, <HighLight source="pow" inline /> – степень.
      </h3>

      <HighLight source={task8} />
      <Task />
    </div>
  );
}
