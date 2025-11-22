export default function Navbar({ onSortDifficulty, onSortName, onToggleDark }) {
    return (
        <div className="
            flex items-center justify-between px-6 py-4
            bg-gradient-to-r from-blue-500 to-indigo-600
            dark:from-gray-800 dark:to-gray-900
            text-white shadow-md
        ">
            {/* Title */}
            <h1 className="text-2xl font-bold tracking-wide">
                Course Recommender
            </h1>

            {/* Buttons */}
            <div className="flex gap-3">

                <button
                    onClick={onSortDifficulty}
                    className="
                        px-4 py-2 rounded-lg font-semibold text-sm
                        bg-white/20 hover:bg-white/30
                        dark:bg-white/10 dark:hover:bg-white/20
                        transition shadow
                    "
                >
                    Sort Difficulty
                </button>

                <button
                    onClick={onSortName}
                    className="
                        px-4 py-2 rounded-lg font-semibold text-sm
                        bg-white/20 hover:bg-white/30
                        dark:bg-white/10 dark:hover:bg-white/20
                        transition shadow
                    "
                >
                    Sort Name
                </button>

                <button
                    onClick={onToggleDark}
                    className="
                        px-4 py-2 rounded-lg font-semibold text-sm
                        bg-white/20 hover:bg-white/30
                        dark:bg-white/10 dark:hover:bg-white/20
                        transition shadow
                    "
                >
                    🌙 Dark Mode
                </button>
            </div>
        </div>
    );
}
