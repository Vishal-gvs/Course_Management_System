import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CoursesPage from "./pages/CoursePage";
import DashboardRouter from "./pages/DashboardRouter";
import Navbar from "./components/Navbar";
import CreateCourse from "./pages/CreateCourse";
import EditCourse from "./pages/EditCourse"

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const storedToken = localStorage.getItem("token");

    // Reset frontend state if backend was restarted and token is invalid
    if (!storedRole || !storedToken) {
      localStorage.clear();
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-indigo-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/dashboard/*" element={<DashboardRouter />} />
            <Route path="/create-course" element={<CreateCourse/>}/>
            <Route path="/edit-course/:id" element={<EditCourse/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}