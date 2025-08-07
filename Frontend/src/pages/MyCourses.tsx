import { useEffect, useState } from "react";
import api from "../services/api";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/my-courses");
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const unenroll = async (id: string) => {
    try {
      await api.delete(`/courses/${id}/unenroll`);
      alert("✅ Successfully unenrolled from the course.");
  
      // Refresh the list
      const res = await api.get("/my-courses");
      setCourses(res.data);
    } catch (err) {
      alert("❌ Failed to unenroll from the course.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-indigo-100 dark:bg-gray-900 p-4">
      <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">My Enrolled Courses</h2>
      {courses.map((c: any) => (
        <div key={c._id} className="bg-white dark:bg-gray-900 p-4 rounded shadow mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{c.title}</h3>
          <p className="text-gray-700 dark:text-gray-200">{c.description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {c.instructorId?.name}</p>
          <button
            onClick={() => unenroll(c._id)}
            className="text-red-600 dark:text-red-400 hover:underline mt-1"
          >
            Unenroll
          </button>
        </div>
      ))}
    </div>
  );
}
