import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditCourse() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/courses/${id}`).then((res) => {
      setForm({ title: res.data.title, description: res.data.description });
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/courses/${id}`, form);
      alert("Course updated!");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to update course");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-96 space-y-4 animate-fade-in">
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100">Edit Course</h2>
        <input
          required
          placeholder="Course Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-gray-100"
        />
        <textarea
          required
          placeholder="Course Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-gray-100"
        />
        <button className="bg-yellow-600 dark:bg-yellow-700 text-white w-full py-2 rounded hover:bg-yellow-700 dark:hover:bg-yellow-800 transition">
          Update Course
        </button>
      </form>
    </div>
  );
}
