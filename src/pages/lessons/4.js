import React from 'react';
import HighLight from '../../components/Hightlight';
import Task41 from '../../components/Task4_1';

const task1 = `const intObj = (int) => {
  if (int > 999 || int < 0) {
    console.log('Accept number in range 0..999');
    return {};
  }

  const hundreds = Math.floor(int / 100);
  const tens = Math.floor((int - (hundreds * 100)) / 10);
  const units = Math.floor(int - ((hundreds * 100) + (tens * 10)));

  return {
    hundreds, tens, units,
  };
};
`;

const task2 = `/**
 * Ключом объекта ВСЕГДА является ID товара
 * @type {{'1': {price: number, name: string, id: number}, '2': {price: number, name: string, id: number}}}
 */
const items = {
  1: {
    id: 1,
    name: 'Item1',
    price: 50,
  },
  2: {
    id: 2,
    name: 'Item2',
    price: 100,
  },
};

const arrayUniq = (value, index, self) => self.indexOf(value) === index;

const basket = {
  /**
   * Храним массив ID товаров. Значения могут быть неуникальными, этим мы достигаем
   * подсчета кол-во позиций того или иного товара
   */
  itemIds: [],

  /**
   * Подсчитывает общую цену всех добавленных товаров в корзину
   * @returns {number}
   */
  totalAmount() {
    // eslint-disable-next-line no-return-assign,no-param-reassign
    return this.itemIds.reduce((sum, itemId) => sum += items[itemId].price, 0);
  },

  /**
   * Возвращает кол-во уникальных позиций в корзине
   * @returns {number}
   */
  totalItems() {
    return this.itemIds.filter(arrayUniq).length;
  },
};

basket.itemIds.push(1); // пихаем ID товара
basket.itemIds.push(2);
basket.itemIds.push(1);

console.log(basket.totalAmount()); // 200 (50 + 50 + 100)
console.log(basket.totalItems()); // 2
`;

export default function Lesson4() {
  return (
    <>
      <h3>1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,{' '}
        мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,{' '}
        десятки и сотни. Например, для числа 245 мы должны получить следующий объект:<br />
        <HighLight inline source="{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}" />.<br />
        Если число превышает 999, необходимо выдать соответствующее сообщение с помощью
        console.log и вернуть пустой объект.
      </h3>

      <HighLight source={task1} />

      <Task41 />

      <h3>
        2.Продолжить работу с интернет-магазином:
      </h3>

      <h3>
        2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов.{' '}
        Какими объектами можно заменить их элементы?
      </h3>

      <h3>2.2. Реализуйте такие объекты.</h3>
      <h3>2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.</h3>

      <HighLight source={task2} />
    </>
  );
}
