import React, { useState, useEffect } from "react";
import axios from "axios";
import banner from "../global/imagesandvideo/contactUsBanner.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaMoneyBillWave,
  FaMobileAlt,
} from "react-icons/fa";

import BillingDetails from "../BillingDetails/BillingDetails";

function BookingForm() {
  const navigate1 = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/billing-details");
  };

  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const cart = useSelector((state) => state.cart.items);

  const subtotal = cart.reduce(
    (total, item) => total + (Number(item.price) || 0) * (item.qty || 0),
    0
  );

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI",
      icon: <FaMobileAlt className="text-green-500 text-2xl mr-2" />,
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: <FaCcVisa className="text-blue-500 text-2xl mr-2" />,
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: <FaMoneyBillWave className="text-yellow-500 text-2xl mr-2" />,
    },
  ];

  const [formData, setFormData] = useState({
    pickUpLocation: "",
    dropLocation: "",
    pickUpDateTime: "",
    dropOffDateTime: "",
    totalPrice: totalPrice || 0,
    status: "PENDING",
    paymentStatus: "UNPAID",
    billingName: "",
    billingEmail: "",
    billingPhone: "",
    billingAddress: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, totalPrice }));
  }, [totalPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/addBooking",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      alert("Booking failed! Please fill your details correctly");
    }
  };

  return (
    <>
      {/* Banner */}
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-fixed flex flex-col justify-end w-full h-64 sm:h-80 md:h-96 lg:h-screen bg-cover bg-center text-white"
      >
        <div className="text-center w-full px-4 mb-5 mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            Checkout
          </h2>
        </div>
      </div>

      <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 p-4 sm:p-6 space-y-6  rounded-md shadow-md"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Billing Details
            </h2>

            {/* Location Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="pickUpLocation"
                >
                  Pick-up Location{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="pickUpLocation"
                  name="pickUpLocation"
                  onChange={handleChange}
                  placeholder="Pick-up Location"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="dropLocation"
                >
                  Drop Location{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="dropLocation"
                  name="dropLocation"
                  onChange={handleChange}
                  placeholder="Drop Location"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Date-Time Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="pickUpDateTime"
                >
                  Pick-up Date & Time{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="pickUpDateTime"
                  name="pickUpDateTime"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="dropOffDateTime"
                >
                  Drop-off Date & Time{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="dropOffDateTime"
                  name="dropOffDateTime"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Billing Details */}
            <div className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="billingName"
                >
                  Billing Name <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="billingName"
                  name="billingName"
                  onChange={handleChange}
                  placeholder="Billing Name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="billingEmail"
                >
                  Billing Email{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="email"
                  id="billingEmail"
                  name="billingEmail"
                  onChange={handleChange}
                  placeholder="Billing Email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="billingPhone"
                >
                  Billing Phone{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="tel"
                  id="billingPhone"
                  name="billingPhone"
                  onChange={handleChange}
                  placeholder="Billing Phone"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="billingAddress"
                >
                  Billing Address{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  name="billingAddress"
                  onChange={handleChange}
                  placeholder="Billing Address"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* City, State, Pincode, Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="city">
                  City <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="state">
                  State <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  onChange={handleChange}
                  placeholder="State"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="pincode">
                  Pincode <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  onChange={handleChange}
                  placeholder="Pincode"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="country">
                  Country <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  onChange={handleChange}
                  placeholder="Country"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Cart Total */}
            <div className="border border-black/20 rounded-md mt-6 p-4 bg-gray-50">
              <h3 className="text-xl font-extrabold mb-4">Cart Total</h3>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Total</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md mt-6">
              <h3 className="text-lg font-bold mb-4 text-center md:text-left">
                Choose Payment Method
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center border p-3 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 w-5 h-5"
                      checked={selectedPayment === method.id}
                      onChange={() => setSelectedPayment(method.id)}
                    />
                    {method.icon}
                    <span className="font-medium">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                onClick={handlePlaceOrder}
                className="w-full sm:w-1/3 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors mt-6"
              >
                Place Order
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="w-full lg:w-1/3 p-4 sm:p-6">
            <label className="block text-gray-700 mb-1" htmlFor="data">
              Additional Information
            </label>
            <textarea
              id="data"
              className="border border-black/50 outline-none rounded-md p-4 w-full h-40 sm:h-48"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
