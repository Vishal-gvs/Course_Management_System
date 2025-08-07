import { Link } from "react-router-dom";
import { getRole, getToken, logout } from "../utils/auth";
import { useEffect, useState } from "react";
import { Sun, Moon, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  const token = getToken();
  const role = getRole();
  const name = localStorage.getItem("name");
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex justify-between items-center relative z-20">
      <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
        EduLearn
      </Link>

      <div className="flex items-center gap-9">
        <button
          aria-label="Toggle dark mode"
          onClick={() => setDark((d) => !d)}
          className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {dark ? (
            <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-12" />
          ) : (
            <Moon className="h-6 w-6 text-indigo-700 transition-transform duration-300 rotate-0 hover:-rotate-12" />
          )}
        </button>

        {!token && (
          <div className="flex items-center gap-9 ml-[-12px]">
            <Link to="/login">
              <button className="flex items-center gap-3 px-3 py-1.5 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-all">
                <LogIn className="h-4 w-4" />
                <strong>Login</strong>
              </button>
            </Link>
            <Link to="/register">
              <button className="flex items-center gap-3 px-3 py-1.5 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-all">
                <UserPlus className="h-4 w-4" />
                <strong>Register</strong>
              </button>
            </Link>
          </div>
        )}

        {token && (
          <>
            <span className="text-sm text-gray-700 dark:text-gray-300">Hello, {name}</span>
            <Link to="/dashboard" className="text-indigo-500 hover:underline">
              Dashboard
            </Link>
            <button
              onClick={() => {
                logout();
                window.location.href = "/";
              }}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
