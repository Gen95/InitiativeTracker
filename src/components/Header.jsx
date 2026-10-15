import React from 'react';

export default function Header({ onAdd }) {
  return (
    <header className="header">
      <div>
        <div className="eyebrow">PATHFINDER 2E</div>
        <h1>Порядок ходов</h1>
      </div>

      <button className="primaryButton" onClick={onAdd} type="button">
        <span className="plus">+</span>
        Добавить
      </button>
    </header>
  );
}
