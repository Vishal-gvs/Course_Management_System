import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "../RBD/Particles/Particles";
import api from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      const { token, user } = res.data;

      if (!token || !user) {
        alert("Invalid response from server");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role || "");
      localStorage.setItem("name", user.name || "");

      navigate("/dashboard");
      
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials");
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
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">Login</h2>
        <input
          name="email"
          placeholder="Email"
          className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-gray-100"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-gray-100"
          onChange={handleChange}
          value={form.password}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded w-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition"
        >
          Login
        </button>
        <a
          href="/register"
          className="text-indigo-500 dark:text-indigo-300 hover:underline text-sm block"
        >
          Don&apos;t have an account? Register
        </a>
      </form>
    </div>
  );
}
