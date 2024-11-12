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
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FDF8F7] flex items-center justify-center p-4">
      <div className="w-full max-w-[900px] h-auto md:h-[500px] bg-white rounded-[20px] overflow-hidden flex flex-col md:flex-row shadow-xl">
        {/* Left Image Section */}
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
              className="h-30 mt-10 w-auto"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-[#A69783] p-8 flex flex-col justify-center">
          {/* Mobile Logo - only shown on small screens */}
          <div className="md:hidden mb-4 text-center">
            <img src="/Flockly1.png" alt="Flockly Logo" className="h-8 w-auto inline-block" />
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
                placeholder="Nomor telepon atau alamat email"
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
                placeholder="Kata sandi"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md bg-[#E5DDD3] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-white text-sm hover:underline"
                >
                  Lupa Kata Sandi?
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-[#5c4842] text-white rounded-md font-medium hover:underline"
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
                className="text-white hover:underline font-medium"
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
