import React from 'react';

export default function EmptyState({ onAdd }) {
  return (
    <div className="emptyState">
      <div className="emptyIcon">⚔</div>
      <h2>Бой ещё не начался</h2>
      <p>Добавьте первого участника и укажите его инициативу.</p>
      <button className="secondaryButton" onClick={onAdd} type="button">
        Добавить персонажа
      </button>
    </div>
  );
}
