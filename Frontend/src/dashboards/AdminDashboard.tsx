import CourseList from "../components/CourseList";
import RoleProtected from "../components/RoleProtected";
import UserManagement from "../pages/UserManagement";

export default function AdminDashboard() {
  return (
    <RoleProtected allowedRoles={["admin"]}>
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold text-indigo-600">Admin Dashboard</h1>
        <UserManagement />
        <CourseList />
      </div>
    </RoleProtected>
  );
}
