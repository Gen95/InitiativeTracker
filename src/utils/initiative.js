const EFFECTIVE_STEP = 0.001;

/**
 * Rebuilds the current encounter order without mutating the original roll.
 * `initiative` is historical/source data; `effectiveInitiative` is an
 * internal value used to preserve manual reorderings when newcomers arrive.
 */
export function normalizeOrder(list) {
  if (list.length === 0) return [];

  const result = list.map((character) => ({ ...character }));

  result[0].order = 1;
  result[0].effectiveInitiative = result[0].initiative;

  for (let i = 1; i < result.length; i += 1) {
    const previous = result[i - 1];
    const current = result[i];

    current.order = i + 1;
    current.effectiveInitiative =
      current.initiative < previous.effectiveInitiative
        ? current.initiative
        : previous.effectiveInitiative - EFFECTIVE_STEP;
  }

  return result;
}

export function insertByInitiative(current, newCharacter) {
  if (current.length === 0) return normalizeOrder([newCharacter]);

  const normalized = normalizeOrder(current);
  const insertionIndex = normalized.findIndex(
    (character) => newCharacter.initiative > character.effectiveInitiative,
  );

  const next = [...normalized];

  if (insertionIndex === -1) next.push(newCharacter);
  else next.splice(insertionIndex, 0, newCharacter);

  return normalizeOrder(next);
}

export function moveCharacter(current, draggedId, targetId) {
  const fromIndex = current.findIndex((character) => character.id === draggedId);
  const toIndex = current.findIndex((character) => character.id === targetId);

  if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
    return current;
  }

  const next = [...current];
  const [movedCharacter] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, movedCharacter);

  return normalizeOrder(next);
}

export function removeCharacter(current, id) {
  return normalizeOrder(current.filter((character) => character.id !== id));
}
