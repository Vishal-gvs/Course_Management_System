import CourseList from "../components/CourseList";
import { getRole } from "../utils/auth";

export default function CoursesPage() {
  const role = getRole();

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
        {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} View` : "Courses"}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {role
          ? "Explore and manage courses based on your access level."
          : "Login to enroll or manage courses based on your role."}
      </p>
      <CourseList />
    </div>
  );
}
