import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRole, getToken } from "../utils/auth";
import api from "../services/api";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const role = getRole();

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  const deleteCourse = async (id: string) => {
    const url = role === "admin" ? `/admin/course/${id}` : `/courses/${id}`;
    await api.delete(url);
    fetchCourses();
  };

  const enroll = async (id: string) => {
    const token = getToken();
    if (!token) {
      alert("Please login to enroll in a course.");
      window.location.href = "/login"; // or use navigate("/login");
      return;
    }
  
    try {
      await api.post(`/courses/${id}/enroll`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Enrolled!");
    } catch (err) {
      alert("Failed to enroll.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="z-10 space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        📚 All Available Courses
      </h2>
      {courses.map((c: any) => (
        <div key={c._id} className="p-4 shadow rounded bg-white transition-all hover:shadow-lg z-10">
          <h3 className="text-xl font-bold">{c.title}</h3>
          <p>{c.description}</p>
          <p className="text-sm text-gray-500">Instructor: {c.instructorId?.name}</p>

          {role === "instructor" && (
            <div className="mt-2 space-x-4">
              <Link to={`/edit-course/${c._id}`} className="text-blue-600 hover:underline">
                Edit
              </Link>
              <button
                onClick={() => deleteCourse(c._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          )}

          {role === "admin" && (
            <button
              onClick={() => deleteCourse(c._id)}
              className="mt-2 text-red-500 hover:underline"
            >
              Delete (Admin)
            </button>
          )}

          <button
            onClick={() => enroll(c._id)}
            className="text-green-500 hover:underline"
          >
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
}
