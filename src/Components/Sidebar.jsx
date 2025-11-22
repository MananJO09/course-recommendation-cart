export default function Sidebar({ xp, level }) {
  return (
    <aside className="p-4 border-l bg-gray-50">
      <h3 className="font-semibold">Your Progress</h3>
      <p>XP: {xp}</p>
      <p>Level: {level}</p>
    </aside>
  );
}
