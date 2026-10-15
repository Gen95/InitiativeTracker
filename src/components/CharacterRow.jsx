import React from 'react';

export default function CharacterRow({
  character,
  isDragging,
  onDragStart,
  onDragEnd,
  onDrop,
  onRemove,
}) {
  return (
    <div
      className={`characterRow ${isDragging ? 'dragging' : ''}`}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={(event) => event.preventDefault()}
      onDrop={onDrop}
    >
      <div className="orderNumber">{character.order}</div>
      <div className="characterName">{character.name}</div>

      <div className="rowActions">
        <span className="dragHandle" title="Изменить порядок" aria-hidden="true">
          ⠿
        </span>
        <button
          className="deleteButton"
          title="Удалить"
          aria-label={`Удалить ${character.name}`}
          onClick={onRemove}
          type="button"
        >
          ×
        </button>
      </div>
    </div>
  );
}
