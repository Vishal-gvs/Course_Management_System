import CourseList from "../components/CourseList";
import MyCourses from "../pages/MyCourses";
import RoleProtected from "../components/RoleProtected";

export default function StudentDashboard() {
  return (
    <RoleProtected allowedRoles={["student"]}>
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold text-indigo-600">Student Dashboard</h1>
        <CourseList />
        <MyCourses />
      </div>
    </RoleProtected>
  );
}