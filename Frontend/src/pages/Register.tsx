import { useState } from "react";
import api from "../services/api";
import Particles from "../RBD/Particles/Particles";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      alert("Registered successfully!");
      window.location.href = "/login";
    } catch (err: any) {
      // 🛑 Show the actual error from backend
      const message =
        err?.response?.data?.error || "Registration failed. Try again.";
      alert(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 dark:bg-gray-900 p-4 transition-colors">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto">
        <Particles particleCount={1800} particleSpread={10} speed={0.12} particleColors={["#fde68a", "#fbbf24", "#f59e42"]} particleBaseSize={80} sizeRandomness={0.7} moveParticlesOnHover={true} particleHoverFactor={1} alphaParticles={true} className="w-full h-full" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="z-10 bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 max-w-md w-full text-center space-y-4"
      >
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">Register</h2>
        <input
          name="name"
          placeholder="Name"
          className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-gray-100"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-gray-100"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-gray-100"
          onChange={handleChange}
        />
        <select
          name="role"
          className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-gray-100"
          value={form.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded w-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition"
        >
          Register
        </button>
        <a href="/" className="text-indigo-500 dark:text-indigo-300 hover:underline text-sm block">
          Already have an account? Login
        </a>
      </form>
    </div>
  );
}
