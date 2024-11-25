import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Daftar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isComplete, setIsComplete] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPasswords, setShowPasswords] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

     
      const allFilled = Object.values(updatedData).every(
        (field) => field.trim() !== ""
      );
      setIsComplete(allFilled);

    
      if (name === "password" || name === "confirmPassword") {
        setPasswordMatch(updatedData.password === updatedData.confirmPassword);
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordMatch) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    navigate("/main");
  };

  const togglePasswordVisibility = () => {
    setShowPasswords((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F7] flex items-center justify-center p-4">
      <div className="w-full max-w-[900px] bg-white rounded-[20px] overflow-hidden flex flex-col md:flex-row shadow-xl">
       
        <div className="hidden md:block w-1/2 relative">
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
          
          <h1 className="text-white text-3xl font-semibold mb-6 text-center">
            Daftar
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.keys(formData).map((field) => (
              <div key={field} className="relative">
                
                <label
                  htmlFor={field}
                  className="text-white text-sm font-medium mb-2"
                >
                  {field === "email"
                    ? "Email"
                    : field === "phone"
                    ? "Nomor Telepon"
                    : field === "username"
                    ? "Nama Pengguna"
                    : field === "password"
                    ? "Kata Sandi"
                    : "Konfirmasi Kata Sandi"}
                </label>

                <input
                  id={field}
                  type={
                    (field === "password" || field === "confirmPassword") &&
                    !showPasswords
                      ? "password"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-md bg-[#E5DDD3] placeholder-transparent focus:outline-none focus:ring-2 ${
                    field === "confirmPassword" && !passwordMatch
                      ? "focus:ring-red-500"
                      : "focus:ring-[#8B7355]"
                  }`}
                />
              </div>
            ))}

            {!passwordMatch && (
              <p className="text-red-500 text-sm">
                Password dan Konfirmasi Password harus sama!
              </p>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#5c4842] text-white rounded-md font-medium hover:underline"
              >
                {isComplete && passwordMatch ? "Lanjutkan" : "Daftar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Daftar;

