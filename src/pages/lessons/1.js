import React, { createRef } from 'react';
import HighLight from '../../components/Hightlight';

const cToFResult = createRef();

const snip2 = `const name = 'Василий';
const admin = name;
console.log("admin name", admin) // Василий
`;

const cToF = (c) => ((9 / 5) * c + 32);

const handleChangeCtoF = (e) => {
  cToFResult.current.innerText = `${cToF(+e.target.value).toFixed(2)}°F`;
};

export default function Lesson1() {
  return (
    <>
      <h3>
        1. Задать температуру в градусах по Цельсию.
        {' '}
        Вывести соответствующую температуру в градусах по Фаренгейту.
      </h3>
      <pre>
        <HighLight language="js">
          const cToF = (c) => ((9 / 5) * c + 32);
        </HighLight>
      </pre>

      <input type="number" defaultValue={0} onChange={handleChangeCtoF} />
      <div ref={cToFResult} style={{ display: 'inline' }} className="" />
      <hr />

      <h3>
        2. Объявить две переменные: admin и name. Записать в name строку "Василий";&nbsp;
        Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»)
      </h3>

      <pre>
        <HighLight>
          { snip2 }
        </HighLight>
      </pre>

      <h3>
        3. Чему будет равно JS-выражение 1000 + "108"
      </h3>

      <pre>
        <HighLight>
          console.log(1000 + "108") // 1000108
        </HighLight>
      </pre>
      <p>
        Когда на любом из слагаемых мест JS видит строку,
        он приводит все слагаемые в строку в результате чего происходит конкатенация строк
      </p>

      <h3>
        4. Самостоятельно разобраться с атрибутами тега script (async и defer)
      </h3>

      <p>
        В ответе не буду углубляться в понятие асинхронности и жизненного цикла загрузки
        и рендера страницы браузером, перейду сразу к сути.
        <br />
        Оба атрибута (async и defer) делает загрузку и выполнение скрипта асинхронным
        с той лишь разницей, что defer выполняет скрипты последовательно в порядке вызова
        их на странице, а async в порядке загрузки.
      </p>
      <p>
        Вторая отличительная особенность defer
        от async в том, что скрипты начнут выполняться только после того,
        как весь HTML страницы будет загружен
      </p>

    </>
  );
}
