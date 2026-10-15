import React from 'react';
import CharacterRow from './CharacterRow.jsx';

export default function InitiativeTable({
  characters,
  draggedId,
  onDragStart,
  onDragEnd,
  onDrop,
  onRemove,
}) {
  return (
    <section className="initiativeTable">
      <div className="tableHeader">
        <div>Очередь</div>
        <div>Персонаж</div>
        <div />
      </div>

      {characters.map((character) => (
        <CharacterRow
          key={character.id}
          character={character}
          isDragging={draggedId === character.id}
          onDragStart={() => onDragStart(character.id)}
          onDragEnd={onDragEnd}
          onDrop={() => onDrop(character.id)}
          onRemove={() => onRemove(character.id)}
        />
      ))}
    </section>
  );
}
