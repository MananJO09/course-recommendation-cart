export default function Navbar({ onSortDifficulty, onSortName, onToggleDark }) {
  return (
    <header className="p-4 border-b flex flex-col gap-3 bg-blue-50">
      <h1 className="text-xl font-bold">📘 Course Activity Recommender — React</h1>
      <div className="flex gap-3 flex-wrap">
        <button onClick={onSortDifficulty}>Sort by Difficulty</button>
        <button onClick={onSortName}>Sort by Name</button>
        <button onClick={onToggleDark}>🌙 Toggle Dark</button>
      </div>
    </header>
  );
}
