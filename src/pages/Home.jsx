import CourseList from "../Components/CourseList";

export default function Home({ courses, onToggleFavorite, onToggleStatus }) {
  return (
    <main className="flex gap-6 p-6">
      <section className="flex-1">
        <h2 className="text-lg font-bold mb-4">Courses</h2>
        <CourseList
          courses={courses}
          onToggleFavorite={onToggleFavorite}
          onToggleStatus={onToggleStatus}
        />
      </section>
    </main>
  );
}
