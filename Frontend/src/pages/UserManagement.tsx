import { useEffect, useState } from "react";
import api from "../services/api";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-indigo-600">User Management</h2>
      {users.map((user: any) => (
        <div key={user._id} className="bg-white p-4 rounded shadow mb-2">
          <p>
            <strong>{user.name}</strong> ({user.email}) -{" "}
            <span className="text-gray-600">{user.role}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
