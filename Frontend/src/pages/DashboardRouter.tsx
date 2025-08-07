import { useEffect, useState } from "react";
import StudentDashboard from "../dashboards/StudentDashboard";
import InstructorDashboard from "../dashboards/InstructorDashboard";
import AdminDashboard from "../dashboards/AdminDashboard";

export default function DashboardRouter() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  if (!role) return <div>Loading dashboard...</div>;

  if (role === "student") return <StudentDashboard />;
  if (role === "instructor") return <InstructorDashboard />;
  if (role === "admin") return <AdminDashboard />;

  return <div>Unauthorized or unknown role</div>;
}
