import { Link } from "react-router-dom";
import RoleProtected from "../components/RoleProtected";
import CourseList from "../components/CourseList";

export default function InstructorDashboard() {
  return (
    <RoleProtected allowedRoles={["instructor"]}>
      <div className="space-y-6 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">Instructor Dashboard</h1>
          <Link
            to="/create-course"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            + Create New Course
          </Link>
        </div>
        <CourseList />
      </div>
    </RoleProtected>
  );
}
