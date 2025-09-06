import { useEffect, useState } from "react";
import { getAllBookings, deleteBooking } from "./services/carService";

const AllBookings = ({ token }) => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = () => {
    if (!token) return;
    getAllBookings(token)
      .then((res) => setBookings(Array.isArray(res.data) ? res.data : []))
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setBookings([]);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, [token]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?"))
      return;

    deleteBooking(id, token)
      .then(() => {
        alert("Booking deleted successfully");
        fetchBookings();
      })
      .catch((err) => {
        console.error("Error deleting booking:", err);
        alert("Failed to delete booking");
      });
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-6">All Bookings</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 overflow-x-auto">
        <table className="min-w-full text-left border border-white/20 rounded-lg overflow-hidden">
          <thead className="bg-white/10">
            <tr>
              <th className="p-3 border border-white/20">User Name</th>
              <th className="p-3 border border-white/20">Email Id</th>
              <th className="p-3 border border-white/20">Pick-up</th>
              <th className="p-3 border border-white/20">Drop-off</th>
              <th className="p-3 border border-white/20">Total Price</th>
              <th className="p-3 border border-white/20">Payment Status</th>
              <th className="p-3 border border-white/20">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-white/20">
                  <td className="p-3">{booking.billingName}</td>
                  <td className="p-3">{booking.billingEmail}</td>
                  <td className="p-3">{booking.pickUpLocation}</td>
                  <td className="p-3">{booking.dropLocation}</td>
                  <td className="p-3">${booking.totalPrice}</td>
                  <td className="p-3">{booking.paymentStatus}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center">
                  No bookings available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;
