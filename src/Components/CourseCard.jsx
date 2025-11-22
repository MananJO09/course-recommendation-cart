export default function CourseCard({ course, onToggleFavorite, onToggleStatus }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
            <h3 className="font-bold text-lg">{course.name}</h3>
            <p className="text-sm text-gray-600">Difficulty: {course.difficulty}</p>
            <p className="mt-2">{course.activity}</p>
            <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {course.favorite ? "★ Unfavorite" : "☆ Favorite"}
                </button>
                <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                    {course.status === "Completed" ? "Mark In Progress" : "Mark Completed"}
                </button>
            </div>
        </div>
    );
}
