# PF2e Initiative Tracker

Одностраничный трекер порядка ходов для Pathfinder 2e.

## Логика

- `initiative` — исходная инициатива персонажа и никогда не изменяется.
- `order` — актуальная позиция персонажа в encounter.
- `effectiveInitiative` — скрытая шкала, позволяющая сохранить ручные перестановки и корректно вставлять новых участников.
- Drag-and-drop изменяет фактический порядок и пересчитывает `order` / `effectiveInitiative`.

## Запуск

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```
