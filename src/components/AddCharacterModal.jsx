import React, { useState } from 'react';

export default function AddCharacterModal({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const numericInitiative = Number(initiative);

    if (!trimmedName || !Number.isFinite(numericInitiative)) return;

    onAdd({ name: trimmedName, initiative: numericInitiative });
  };

  return (
    <div className="modalBackdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(event) => event.stopPropagation()}>
        <header className="modalHeader">
          <div>
            <div className="eyebrow">НОВЫЙ УЧАСТНИК</div>
            <h2>Добавить персонажа</h2>
          </div>
          <button className="closeButton" onClick={onClose} type="button" aria-label="Закрыть">
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Имя</span>
            <input
              autoFocus
              value={name}
              placeholder="Например, Гоблин"
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            <span>Инициатива</span>
            <input
              type="number"
              value={initiative}
              placeholder="Например, 18"
              onChange={(event) => setInitiative(event.target.value)}
            />
          </label>

          <div className="modalActions">
            <button type="button" className="cancelButton" onClick={onClose}>
              Отмена
            </button>
            <button type="submit" className="primaryButton">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
