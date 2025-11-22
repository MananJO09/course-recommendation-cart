export default function CourseCard({ course, onToggleFavorite, onToggleStatus }) {
  
  // Tailwind gradient colors for each difficulty
  const difficultyGradients = {
    1: "from-green-400 to-green-500 dark:from-green-700 dark:to-green-900 text-white",
    2: "from-teal-400 to-emerald-500 dark:from-teal-700 dark:to-emerald-900 text-white",
    3: "from-yellow-400 to-yellow-500 dark:from-yellow-600 dark:to-yellow-800 text-gray-900 dark:text-black",
    4: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-900 text-white",
    5: "from-red-500 to-pink-600 dark:from-red-800 dark:to-pink-900 text-white",
  };

  return (
    <div
      className={`p-4 rounded-xl shadow-lg bg-gradient-to-br 
      ${difficultyGradients[course.difficulty]} 
      transition transform hover:scale-[1.02] cursor-pointer`}
    >
      {/* Course Name */}
      <h3 className="font-bold text-xl">{course.name}</h3>

      {/* Difficulty & Status */}
      <p className="text-sm opacity-90 mt-1">
        Difficulty: <span className="font-semibold">{course.difficulty}</span>
      </p>

      {/* Activity */}
      <p className="mt-2 font-medium">{course.activity}</p>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        
        {/* FAVORITE BUTTON */}
        <button
          onClick={() => onToggleFavorite(course.id)}
          className="
            px-3 py-1 rounded-lg text-white text-sm font-semibold
            bg-black/20 hover:bg-black/30
            dark:bg-white/20 dark:hover:bg-white/30
            transition
          "
        >
          {course.favorite ? "★ Unfavorite" : "☆ Favorite"}
        </button>

        {/* STATUS BUTTON */}
        <button
          onClick={() => onToggleStatus(course.id)}
          className="
            px-3 py-1 rounded-lg text-white text-sm font-semibold
            bg-black/20 hover:bg-black/30
            dark:bg-white/20 dark:hover:bg-white/30
            transition
          "
        >
          {course.status === "Completed" ? "Mark In Progress" : "Mark Completed"}
        </button>

      </div>
    </div>
  );
}
