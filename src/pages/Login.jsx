import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#FDF8F7] flex items-center justify-center p-4">
      <div className="w-full max-w-[900px] h-auto md:h-[500px] bg-white rounded-[20px] overflow-hidden flex flex-col md:flex-row shadow-xl">
       
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/rumah.jpg"
            alt="Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <img
              src="/Flockly1.png"
              alt="Flockly Logo"
              className="h-20 mt-70 w-auto"
            />
          </div>
        </div>

       
        <div className="w-full md:w-1/2 bg-[#A69783] p-8 flex flex-col justify-center">
          <div className="md:hidden mb-4 text-center">
            <img
              src="/Flockly1.png"
              alt="Flockly Logo"
              className="h-8 w-auto inline-block"
            />
          </div>

          <h1 className="text-white text-3xl font-semibold mb-8 text-center">
            Masuk
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-white text-sm mb-1">
                Nama Pengguna
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md bg-[#E5DDD3] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-white text-sm mb-1">
                Kata Sandi
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md bg-[#E5DDD3] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              />
              <div className="flex justify-end">
                <button type="button" className="text-white text-sm underline">
                  Lupa Kata Sandi?
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-40 py-3 bg-[#5c4842] text-white rounded-md font-medium :underline"
              >
                Masuk
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white text-sm">
              Belum memiliki akun?{" "}
              <button
                type="button"
                className="text-white font-medium underline"
                onClick={() => navigate("/daftar")}
              >
                Daftar sekarang
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
