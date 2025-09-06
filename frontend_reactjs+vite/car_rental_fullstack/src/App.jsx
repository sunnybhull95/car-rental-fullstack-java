import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Login from "./scenes/Login/Login";
import Home from "./scenes/Home/Home";
import HomeCarDetails from "./scenes/HomeCarServices/HomeCarDetails";
import TopBar from "./scenes/global/TopBar";
import Header from "./scenes/global/Header";
import Footer from "./scenes/global/Footer";
import CarByTypeCardDetails from "./scenes/HomeCarServices/CarByTypeCardDetails";
import AboutUs from "./scenes/AboutUs/AboutUs";
import Services from "./scenes/Services/Services";
import ContactUs from "./scenes/ContactUs/ContactUs";
import Faq from "./scenes/FAQs/Faq";
import ScrollToTop from "./scenes/global/ScrollToTop";
import CarBooking from "./scenes/CarBooking/CarBooking";
import Cart from "./scenes/Cart/Cart";
import BookingForm from "./scenes/BookingForm/BookingForm";
import FilterDisplay from "./scenes/Filter/FilterDisplay";
import AdminDashboard from "./dashboard/AdminDashboard";
import BillingDetails from "./scenes/BillingDetails/BillingDetails";
import Register from "./scenes/Registration/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const location = useLocation();

  useEffect(() => {
    setToken(localStorage.getItem("adminToken") || "");
  }, []);

  const roles = useMemo(() => {
    if (!token) return [];
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.roles || [];
    } catch {
      return [];
    }
  }, [token]);

  const isAdmin = roles.includes("ROLE_Admin");

  const AdminRoute = ({ children }) => {
    if (!token) return <Navigate to="/login" replace />;
    if (!isAdmin) return <Navigate to="/home" replace />;
    return children;
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Hide TopBar, Header, Footer when on /admin route
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      <div className="bg-black min-h-screen">
        {!hideLayout && <TopBar />}
        {!hideLayout && (
          <Header>
            {token && (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded ml-4"
              >
                Logout
              </button>
            )}
          </Header>
        )}

        <Routes>
          {/* Public Home Routes */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />

          {/* Public Pages */}
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/billing-details" element={<BillingDetails />} />

          {/* Car and Booking */}
          <Route path="/cart/:cartByModel" element={<Cart />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/filterDisplay" element={<FilterDisplay />} />
          <Route path="/car/:carName" element={<HomeCarDetails />} />
          <Route path="/carType/:cartype" element={<CarByTypeCardDetails />} />
          <Route path="/model/:modelId" element={<CarBooking />} />

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard token={token} />
              </AdminRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

        {!hideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;
