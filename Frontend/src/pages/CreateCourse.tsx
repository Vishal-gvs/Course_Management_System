import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CreateCourse() {
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/courses", form);
      alert("Course created!");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to create course");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-96 space-y-4 animate-slide-in">
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100">Create New Course</h2>
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
        <button className="bg-sky-600 dark:bg-sky-700 text-white w-full py-2 rounded hover:bg-sky-700 dark:hover:bg-sky-800 transition">
          Create Course
        </button>
      </form>
    </div>
  );
}
