import React, { useMemo, useState } from 'react';
import AddCharacterModal from './components/AddCharacterModal.jsx';
import EmptyState from './components/EmptyState.jsx';
import Header from './components/Header.jsx';
import InitiativeTable from './components/InitiativeTable.jsx';
import { insertByInitiative, moveCharacter, removeCharacter } from './utils/initiative.js';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedId, setDraggedId] = useState(null);

  const orderedCharacters = useMemo(
    () => [...characters].sort((a, b) => a.order - b.order),
    [characters],
  );

  const handleAdd = ({ name, initiative }) => {
    const character = {
      id: crypto.randomUUID(),
      name,
      initiative,
      order: null,
      effectiveInitiative: initiative,
    };

    setCharacters((current) => insertByInitiative(current, character));
    setIsModalOpen(false);
  };

  const handleDrop = (targetId) => {
    if (draggedId && draggedId !== targetId) {
      setCharacters((current) => moveCharacter(current, draggedId, targetId));
    }
    setDraggedId(null);
  };

  return (
    <div className="app">
      <main className="tracker">
        <Header onAdd={() => setIsModalOpen(true)} />

        {orderedCharacters.length === 0 ? (
          <EmptyState onAdd={() => setIsModalOpen(true)} />
        ) : (
          <InitiativeTable
            characters={orderedCharacters}
            draggedId={draggedId}
            onDragStart={setDraggedId}
            onDragEnd={() => setDraggedId(null)}
            onDrop={handleDrop}
            onRemove={(id) => setCharacters((current) => removeCharacter(current, id))}
          />
        )}
      </main>

      {isModalOpen && (
        <AddCharacterModal onClose={() => setIsModalOpen(false)} onAdd={handleAdd} />
      )}
    </div>
  );
}
