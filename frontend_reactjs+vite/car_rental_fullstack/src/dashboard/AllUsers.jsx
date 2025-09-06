import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "./services/carService";

const AllUsers = ({ token }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    if (!token) return;
    getAllUsers(token)
      .then((res) => setUsers(Array.isArray(res.data) ? res.data : []))
      .catch((err) => {
        console.error("Error fetching users:", err);
        setUsers([]);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    deleteUser(id, token)
      .then(() => {
        alert("User deleted successfully");
        fetchUsers();
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        alert("Failed to delete user");
      });
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-6">All Users</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 overflow-x-auto">
        <table className="min-w-full text-left border border-white/20 rounded-lg overflow-hidden">
          <thead className="bg-white/10">
            <tr>
              <th className="p-3 border border-white/20">Name</th>
              <th className="p-3 border border-white/20">Email</th>
              <th className="p-3 border border-white/20">Role</th>
              <th className="p-3 border border-white/20">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b border-white/20">
                  <td className="p-3">{user.fullName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
