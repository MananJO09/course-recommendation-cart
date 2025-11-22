import { useState } from "react";
import sampleCourses from "./data/SampleCourses.js";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";

export default function App() {

    <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white text-3xl">
      Tailwind is working 🎉
    </div>
    
  const [courses, setCourses] = useState(sampleCourses);
  const [dark, setDark] = useState(false);
  const [xp, setXp] = useState(0);

  const sortByDifficulty = () => {
    setCourses([...courses].sort((a, b) => a.difficulty - b.difficulty));
  };

  const sortByName = () => {
    setCourses([...courses].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const toggleFavorite = (id) => {
    setCourses(courses.map(c =>
      c.id === id ? { ...c, favorite: !c.favorite } : c
    ));
  };

  const toggleStatus = (id) => {
    setCourses(courses.map(c => {
      if (c.id === id) {
        if (c.status === "Completed") return { ...c, status: "In Progress" };
        else {
          setXp(xp + 50); // add XP
          return { ...c, status: "Completed" };
        }
      }
      return c;
    }));
  };

  return (
    <div className={dark ? "dark bg-gray-900 text-white" : ""}>
      <Navbar
        onSortDifficulty={sortByDifficulty}
        onSortName={sortByName}
        onToggleDark={() => setDark(!dark)}
      />
      <div className="flex">
        <Home
          courses={courses}
          onToggleFavorite={toggleFavorite}
          onToggleStatus={toggleStatus}
        />
        <Sidebar xp={xp} level={Math.floor(xp / 100) + 1} />
      </div>
    </div>
  );
}
