import { Link } from "react-router-dom";
import { useState } from "react";
import Particles from "../RBD/Particles/Particles";

export default function HomePage() {
  const [rolePrompt, setRolePrompt] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col text-center bg-indigo-100 dark:bg-gray-900 transition-colors relative overflow-hidden">
      <div className="relative z-10 flex flex-col flex-grow min-h-screen">
        {/* Particles covers the entire viewport */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto">
          <Particles
            particleCount={500}
            particleSpread={10}
            speed={0.12}
            particleColors={["#fde68a", "#fbbf24", "#f59e42"]}
            particleBaseSize={80}
            sizeRandomness={0.7}
            moveParticlesOnHover={true}
            particleHoverFactor={1}
            alphaParticles={true}
            className="w-full h-full"
          />
        </div>
        <header className="flex flex-col items-center mt-10 animate-fade-in-down">
          <span className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
            Welcome to EduLearn LMS{" "}
            <span role="img" aria-label="book">
              📘
            </span>
          </span>
          <span className="text-gray-700 dark:text-gray-200 text-lg max-w-md">
            Learn from curated courses. Role-based access for students,
            instructors, and admins.
          </span>
        </header>
        <main className="flex flex-col justify-center items-center flex-grow animate-fade-in">
          {/* Interactive Prompt */}
          <div className="mb-8">
            {!rolePrompt ? (
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center gap-4">
                <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                  Who are you?
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() => setRolePrompt("student")}
                    className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition z-10"
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setRolePrompt("instructor")}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition z-10"
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => setRolePrompt("admin")}
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition z-10"
                  >
                    Admin
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center gap-4">
                {rolePrompt === "student" && (
                  <>
                    <span className="text-indigo-700 dark:text-indigo-300 font-semibold">
                      Welcome, Student!
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">
                      Browse courses and enroll to start learning.
                    </span>
                    <div className="flex gap-2">
                      <Link
                        to="/courses"
                        className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 z-10 rounded hover:bg-indigo-700 dark:hover:bg-indigo-800 transition"
                      >
                        View Courses
                      </Link>
                      <Link
                        to="/register"
                        className="bg-white dark:bg-gray-800 border border-indigo-600 z-10 text-indigo-600 dark:text-indigo-300 px-4 py-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
                      >
                        Register
                      </Link>
                    </div>
                  </>
                )}
                {rolePrompt === "instructor" && (
                  <>
                    <span className="text-green-700 dark:text-green-300 font-semibold">
                      Welcome, Instructor!
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">
                      Create and manage your courses for students.
                    </span>
                    <div className="flex gap-2">
                      <Link
                        to="/register"
                        className="z-10 bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-800 transition"
                      >
                        Register as Instructor
                      </Link>
                      <Link
                        to="/login"
                        className="z-10 bg-white dark:bg-gray-800 border border-green-600 text-green-600 dark:text-green-300 px-4 py-2 rounded hover:bg-green-100 dark:hover:bg-gray-700 transition"
                      >
                        Login
                      </Link>
                    </div>
                  </>
                )}
                {rolePrompt === "admin" && (
                  <>
                    <span className="text-pink-700 dark:text-pink-300 font-semibold">
                      Welcome, Admin!
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">
                      Manage users and oversee the platform.
                    </span>
                    <div className="flex gap-2">
                      <Link
                        to="/register"
                        className="z-10 bg-pink-600 dark:bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-700 dark:hover:bg-pink-800 transition"
                      >
                        Register as Admin
                      </Link>
                      <Link
                        to="/login"
                        className="z-10 bg-white dark:bg-gray-800 border border-pink-600 text-pink-600 dark:text-pink-300 px-4 py-2 rounded hover:bg-pink-100 dark:hover:bg-gray-700 transition"
                      >
                        Login
                      </Link>
                    </div>
                  </>
                )}
                <button
                  onClick={() => setRolePrompt(null)}
                  className="z-10 mt-2 text-xs text-gray-500 dark:text-gray-400 hover:underline"
                >
                  Back
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Courses */}
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <svg
                className="h-12 w-12 text-indigo-500 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12V4l9 5-9 5-9-5 9-5z"
                />
              </svg>
              <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                Courses
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Browse and enroll in courses
              </span>
            </div>
            {/* Register */}
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <svg
                className="h-12 w-12 text-green-500 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21v-2a4 4 0 00-8 0v2"
                />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-semibold text-green-700 dark:text-green-300">
                Register
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Create your free account
              </span>
            </div>
            {/* Login */}
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <svg
                className="h-12 w-12 text-yellow-500 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 12H7a2 2 0 01-2-2V7a2 2 0 012-2h2m6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 10v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"
                />
              </svg>
              <span className="font-semibold text-yellow-700 dark:text-yellow-300">
                Login
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Access your dashboard
              </span>
            </div>
            {/* Dashboard */}
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <svg
                className="h-12 w-12 text-pink-500 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 3v4M8 3v4M4 11h16"
                />
              </svg>
              <span className="font-semibold text-pink-700 dark:text-pink-300">
                Dashboard
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Role-based features
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/login"
              className="z-10 bg-indigo-600 dark:bg-indigo-700 text-white px-6 py-2 rounded-xl shadow hover:bg-indigo-700 dark:hover:bg-indigo-800 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="z-10 bg-white dark:bg-gray-900 border border-indigo-600 text-indigo-600 dark:text-indigo-300 px-6 py-2 rounded-xl shadow hover:bg-indigo-100 dark:hover:bg-gray-800 transition"
            >
              Create Account
            </Link>
            <Link
              to="/courses"
              className="z-10 bg-green-600 dark:bg-green-700 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 dark:hover:bg-green-800 transition"
            >
              View Courses
            </Link>
          </div>
        </main>
      </div>
      <footer className="bg-indigo-200 dark:bg-gray-800 text-center py-4 text-sm text-gray-700 dark:text-gray-300 mt-auto animate-fade-in-up border-t border-indigo-300 dark:border-gray-700">
        <div className="flex flex-col items-center gap-1">
          <p>
            Made by{" "}
            <strong>Vishal</strong>
          </p>
          <p className="text-xs italic">Keep learning, keep growing 📚🚀</p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400">
            EduLearn LMS &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
