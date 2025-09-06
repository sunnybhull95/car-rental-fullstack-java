import { useState } from "react";
import axios from "axios";
import car from "../global/imagesandvideo/loginIntro.mp4";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      const token = response.data.token;
      if (token) {
        // save token
        localStorage.setItem("adminToken", token);
        if (setToken) setToken(token);

        // decode roles from JWT
        let roles = [];
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          roles = payload.roles || [];
        } catch (e) {
          roles = [];
        }

        // redirect based on roles
        if (roles.includes("ROLE_Admin")) {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        setError("Login failed. Token not found.");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-full h-screen">
        <video
          className="w-full h-full object-cover"
          src={car}
          autoPlay
          loop
          muted
        />
      </div>

      <form
        onSubmit={handleLogin}
        className="bg-black/30 p-6 rounded-2xl shadow-md w-80 absolute backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-black/30 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-black/30 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-black hover:text-black hover:bg-white/30 text-white p-2 rounded-3xl"
        >
          Login
        </button>

        <p className="mt-4">
          Don't have account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-red-400 text-sm"
          >
            Register here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
