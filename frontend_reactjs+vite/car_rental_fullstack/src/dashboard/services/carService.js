import axios from "axios";

const API_BASE = "http://localhost:8080"; // your backend base URL

// Get all cars
const getAllCars = (token) =>
  axios.get(`${API_BASE}/allCars`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Add a new car
const addCar = (car, token) =>
  axios.post(`${API_BASE}/admin/cars/addCar`, car, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Update car by ID
const updateCar = (id, car, token) =>
  axios.post(`${API_BASE}/admin/cars/updateById/${id}`, car, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Delete car by ID
const deleteCar = (id, token) =>
    // console.log(token)
  axios.delete(`${API_BASE}/admin/cars/deletById/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
//Get All Users
const getAllUsers = ( token) =>
  axios.get(`${API_BASE}/admin/cars/getAllUsers`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const deleteUser = (id, token) =>
    // console.log(token)
  axios.delete(`${API_BASE}/admin/cars/userDeletById/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // Get All Bookings
const getAllBookings = (token) =>
  axios.get(`${API_BASE}/allBookings`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Delete Booking by ID
const deleteBooking = (id, token) =>
  axios.delete(`${API_BASE}/cancelBooking/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export { getAllCars, addCar, updateCar, deleteCar, getAllUsers, deleteUser, getAllBookings, deleteBooking };




