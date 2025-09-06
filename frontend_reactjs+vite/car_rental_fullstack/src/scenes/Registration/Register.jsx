import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthPage";
import { useNavigate } from "react-router-dom";

import car from "../global/imagesandvideo/registration.jpeg";
const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // same login method used to store token
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/register", {
        fullName: fullName,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Registration successful:", res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration failed");
        alert("Could not register. Try again.");
      });
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-gray-900 bg-cover "
        style={{ backgroundImage: `url(${car})` }}
      >
        <form
          onSubmit={handleRegister}
          className="bg-black/30 text-white p-6 rounded-2xl mx-auto shadow-md w-80 backdrop-blur-md "
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          <div className="mb-4">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              className="w-full p-2 rounded bg-black/30 outline-none"
              type="text"
              placeholder="Username"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>

            <input
              className="w-full p-2 rounded bg-black/30 outline-none"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>

            <input
              className="w-full p-2 rounded bg-black/30 outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-black hover:text-black hover:bg-white/30 text-white p-2 rounded-3xl"
          >
            Register
          </button>

          <p className="mt-4">
            Have already an account ?
            <button
              onClick={() => navigate("/Login")}
              className="text-red-400 text-sm"
            >
              Login here
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
