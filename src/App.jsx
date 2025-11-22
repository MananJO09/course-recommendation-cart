import { useState } from "react";
import sampleCourses from "./data/SampleCourses.js";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  
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
        if (c.status === "Completed") {
          return { ...c, status: "In Progress" };
        } else {
          setXp(xp + 50);
          return { ...c, status: "Completed" };
        }
      }
      return c;
    }));
  };

  return (
    <div className={dark ? "dark bg-gray-900 text-white min-h-screen" : "min-h-screen bg-gray-100"}>
      {/* NAVBAR */}
      <Navbar
        onSortDifficulty={sortByDifficulty}
        onSortName={sortByName}
        onToggleDark={() => setDark(!dark)}
      />

      {/* MAIN CONTENT */}
      <div className="flex gap-4 p-4">
        {/* COURSE GRID */}
        <Home
          courses={courses}
          onToggleFavorite={toggleFavorite}
          onToggleStatus={toggleStatus}
        />

        {/* SIDEBAR */}
        <Sidebar xp={xp} level={Math.floor(xp / 100) + 1} />
      </div>
    </div>
  );
}
