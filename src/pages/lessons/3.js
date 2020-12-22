import React from 'react';
import HighLight from '../../components/Hightlight';

const task1 = `const a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const i = 0;
while (i < a.length) {
  console.log(a[i++]);
}`;

const task2 = `const basketItems = [
  {
    id: 1,
    name: 'Item 1',
    price: 10,
    count: 2,
  },
  {
    id: 2,
    name: 'Item 2',
    price: 11.25,
    count: 1,
  },
];

const countBasketPrice = (basket) => basket.reduce((sum, curr) => {
  sum += curr.price * curr.count;
  return sum;
}, 0);

console.log(countBasketPrice(basketItems)); // 31.25`;

const task3 = 'for (let i = 0; i < 10; console.log(i), i += 1) {}';

const task4 = `let rows = 0;
let x = '';
do {
  rows += 1;
  console.log(x += 'x', rows);
} while (rows < 20);

/*
x 1
xx 2
xxx 3
xxxx 4
xxxxx 5
xxxxxx 6
xxxxxxx 7
xxxxxxxx 8
xxxxxxxxx 9
xxxxxxxxxx 10
xxxxxxxxxxx 11
xxxxxxxxxxxx 12
xxxxxxxxxxxxx 13
xxxxxxxxxxxxxx 14
xxxxxxxxxxxxxxx 15
xxxxxxxxxxxxxxxx 16
xxxxxxxxxxxxxxxxx 17
xxxxxxxxxxxxxxxxxx 18
xxxxxxxxxxxxxxxxxxx 19
xxxxxxxxxxxxxxxxxxxx 20
*/`;

export default function Lesson3() {
  return (
    <>
      <h3>1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100</h3>

      <HighLight source={task1} />

      <h3>
        2. С этого урока начинаем работать с функционалом интернет-магазина.{' '}
        Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины{' '}
        в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве.
        {' '}Задачи:
        <ul>
          <li>Организовать такой массив для хранения товаров в корзине</li>
          <li>Организовать функцию countBasketPrice, которая будет считать стоимость корзины</li>
        </ul>
      </h3>

      <HighLight source={task2} />

      <h3>
        3. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
        Выглядеть это должно так:{' '}
        <HighLight inline source="for(…){// здесь пусто}" />
      </h3>

      <HighLight source={task3} />

      <h3>
        4. Нарисовать пирамиду с помощью <HighLight inline source="console.log" />, как показано{' '}
        на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5
      </h3>

      <HighLight source={task4} />
    </>
  );
}
