export default function Sidebar({ xp, level }) {
    return (
        <div className="w-72 flex flex-col gap-5 p-4">

            {/* XP Card */}
            <div className="
                p-5 rounded-xl shadow-lg 
                bg-gradient-to-br from-purple-500 to-fuchsia-600
                dark:from-purple-800 dark:to-fuchsia-900
                text-white
            ">
                <h2 className="text-xl font-bold">Your Progress</h2>
                <p className="mt-2">XP: {xp}</p>

                {/* Progress Bar */}
                <div className="w-full bg-white/30 dark:bg-white/20 h-3 rounded-full mt-3 overflow-hidden">
                    <div
                        className="h-full bg-white dark:bg-gray-200 rounded-full transition"
                        style={{ width: `${xp % 100}%` }}
                    ></div>
                </div>

                <p className="mt-2 text-md">Level: {level}</p>
            </div>

            {/* Add Course Card */}
            <div className="
                p-5 rounded-xl shadow bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-200
            ">
                <h3 className="font-bold mb-3">Add New Course</h3>

                <input
                    className="w-full p-2 mb-2 rounded bg-gray-100 dark:bg-gray-700"
                    placeholder="Course name"
                />

                <input
                    className="w-full p-2 mb-2 rounded bg-gray-100 dark:bg-gray-700"
                    placeholder="Difficulty (1-5)"
                />

                <input
                    className="w-full p-2 mb-2 rounded bg-gray-100 dark:bg-gray-700"
                    placeholder="Activity"
                />

                <button
                    className="
                        px-4 py-2 w-full rounded-lg mt-2
                        bg-gradient-to-r from-blue-500 to-indigo-600
                        hover:opacity-90 text-white font-semibold shadow
                    "
                >
                    Add Course
                </button>
            </div>

            {/* Leaderboard Card */}
            <div className="
                p-5 rounded-xl shadow bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-200
            ">
                <h3 className="font-bold mb-3">Leaderboard</h3>
                <ol className="list-decimal list-inside">
                    <li>You — {xp} XP</li>
                </ol>
            </div>
        </div>
    );
}
 