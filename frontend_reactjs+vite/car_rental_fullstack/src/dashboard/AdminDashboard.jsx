import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AddCars from "./pages/AddCars";
import AllUsers from "../dashboard/AllUsers";
import AllBookings from "./AllBookings";

const AdminDashboard = ({ token }) => {
  const [activePage, setActivePage] = useState("dashboard");
  const [validToken, setValidToken] = useState(
    token || localStorage.getItem("adminToken")
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setValidToken(token || localStorage.getItem("adminToken"));
  }, [token]);

  if (!validToken) {
    return (
      <div className="p-6 text-center text-red-500 text-lg font-semibold">
        Admin not logged in! Please login first.
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("cart"); // clear cart
    navigate("/"); // redirect to homepage
  };

  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "addCar", label: "Add Car" },
    { key: "allUsers", label: "All Users" },
    { key: "allBookings", label: "All Bookings" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-900/80 backdrop-blur-lg shadow-md">
        <h1 className="text-xl font-bold mt-20">Admin Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-2xl"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0  h-dvh md:sticky  w-64 bg-gray-900/80 backdrop-blur-lg border-r border-gray-800 p-6 flex flex-col justify-between shadow-xl transition-transform duration-300 z-50
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:w-64`}
      >
        <div className="flex flex-col space-y-6">
          <nav className="flex flex-col space-y-3">
            {menuItems.map((btn) => (
              <button
                key={btn.key}
                onClick={() => {
                  setActivePage(btn.key);
                  setSidebarOpen(false); // close on mobile
                }}
                className={`w-full px-4 py-2 rounded-lg text-left transition-all duration-300 font-medium ${
                  activePage === btn.key
                    ? "bg-blue-600 text-white shadow-md scale-[1.02]"
                    : "bg-gray-700/60 hover:bg-gray-600/80 hover:scale-[1.01]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-6 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        {activePage === "dashboard" && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Welcome, Admin!</h2>
            <p className="text-gray-300">
              Use the sidebar to manage cars, view users, and monitor bookings.
            </p>
          </div>
        )}
        {activePage === "addCar" && <AddCars token={validToken} />}
        {activePage === "allUsers" && <AllUsers token={validToken} />}
        {activePage === "allBookings" && <AllBookings token={validToken} />}
      </main>
    </div>
  );
};

export default AdminDashboard;
