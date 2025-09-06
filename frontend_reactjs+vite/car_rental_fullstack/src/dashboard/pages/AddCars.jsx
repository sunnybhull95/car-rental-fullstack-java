import { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  getAllCars,
  addCar,
  updateCar,
  deleteCar,
  getAllUsers,
} from "../services/carService";

const AddCars = ({ token }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    if (!token) return;
    try {
      const res = await getAllUsers(token);
      if (res && Array.isArray(res.data)) setUsers(res.data);
      else setUsers([]);
    } catch {
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    price: 0,
    imageUrl: "",
    cartype: "",
    totalpassengers: "",
    totalluggage: "",
    geartype: "",
    cardoors: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await getAllCars(token);
      if (Array.isArray(res.data)) setCars(res.data);
      else setCars([]);
    } catch {
      setCars([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    try {
      if (editingId) await updateCar(editingId, form, token);
      else await addCar(form, token);
      setEditingId(null);
      setForm({
        make: "",
        model: "",
        year: "",
        price: 0,
        imageUrl: "",
        cartype: "",
        totalpassengers: "",
        totalluggage: "",
        geartype: "",
        cardoors: "",
      });
      fetchCars();
    } catch {}
  };

  const handleEdit = (car) => {
    setEditingId(car.id);
    setForm({ ...car });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!token) return;
    if (!window.confirm("Are you sure?")) return;
    try {
      await deleteCar(id, token);
      fetchCars();
    } catch {}
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-6">
        {editingId ? "Edit Car" : "Add Car"}
      </h2>

      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 mb-6">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {Object.keys(form).map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              type={["year", "price"].includes(field) ? "number" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="border border-white/20 bg-white/10 backdrop-blur-md p-3 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg col-span-1 sm:col-span-2"
          >
            {editingId ? "Update Car" : "Add Car"}
          </button>
        </form>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4">All Cars</h3>
        {loading ? (
          <p>Loading cars...</p>
        ) : (
          <table className="min-w-full text-left border border-white/20 rounded-lg overflow-hidden">
            <thead className="bg-white/10">
              <tr>
                <th className="p-3 border border-white/20">Make</th>
                <th className="p-3 border border-white/20">Model</th>
                <th className="p-3 border border-white/20">Year</th>
                <th className="p-3 border border-white/20">Price</th>
                <th className="p-3 border border-white/20">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.length > 0 ? (
                cars.map((car) => (
                  <tr key={car.id} className="border-b border-white/20">
                    <td className="p-3">{car.make}</td>
                    <td className="p-3">{car.model}</td>
                    <td className="p-3">{car.year}</td>
                    <td className="p-3">{car.price}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleEdit(car)}
                        className="bg-green-500 p-2 rounded-lg hover:bg-green-600"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(car.id)}
                        className="bg-red-500 p-2 rounded-lg hover:bg-red-600"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-4 text-center">
                    No cars available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AddCars;
