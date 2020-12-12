import React from 'react';
import { Link } from '@reach/router';

export default function () {
  return (
    <div>
      <h3>Уроки</h3>
      <ul>
        <li>
          <Link to="/lessons/1">Основы языка Javascript</Link>
        </li>

        <li>
          <Link to="/lessons/2">Основные операторы JavaScript</Link>
        </li>
      </ul>
    </div>
  );
}
