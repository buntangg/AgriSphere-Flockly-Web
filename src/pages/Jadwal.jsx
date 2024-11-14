import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PemberianPage = () => {
  const [feedingTime, setFeedingTime] = useState("00:00");
  const [healthCheck, setHealthCheck] = useState("dd/mm/yyyy");
  const [vaccination, setVaccination] = useState("dd/mm/yyyy");
  const [caretaking, setCaretaking] = useState("dd/mm/yyyy");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notifications, setNotifications] = useState([]);

  const animals = ["Ayam", "Bebek", "Puyuh"];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animals.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === animals.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSubmit = () => {
    const notificationText = `Jadwal ${animals[currentIndex]} berhasil disimpan!`;
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      notificationText,
    ]);
  };

  return (
    <div className="bg-[#d9d1c2] rounded-lg shadow-md p-6 w-full max-w-3xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-4 text-center">Pemberian Pakan</h1>

      <div className="relative overflow-hidden ">
        {/* Kontainer untuk konten yang dapat digeser */}
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {animals.map((animal) => (
            <div key={animal} className="min-w-full px-4 ">
              <h2 className="text-lg mb-2 font-semibold">{animal}</h2>
              <div className="space-y-4 ">
                <div cl>
                  <label
                    htmlFor={`feedingTime-${animal.toLowerCase()}`}
                    className="block font-medium mb-2 "
                  >Pemberian pakan
                  </label>
                  <input
                    type="time"
                    id={`feedingTime-${animal.toLowerCase()}`}
                    value={feedingTime}
                    onChange={(e) => setFeedingTime(e.target.value)}
                    className="bg-[#fdf9f4] text-[#5c4842]  w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`healthCheck-${animal.toLowerCase()}`}
                    className="block font-medium mb-2"
                  >
                    Pemeriksaan kesehatan 
                  </label>
                  <input
                    type="date"
                    id={`healthCheck-${animal.toLowerCase()}`}
                    value={healthCheck}
                    onChange={(e) => setHealthCheck(e.target.value)}
                    className="bg-[#fdf9f4] text-[#5c4842]  w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`vaccination-${animal.toLowerCase()}`}
                    className="block font-medium mb-2"
                  >
                    Vaksinasi
                  </label>
                  <input
                    type="date"
                    id={`vaccination-${animal.toLowerCase()}`}
                    value={vaccination}
                    onChange={(e) => setVaccination(e.target.value)}
                    className="bg-[#fdf9f4] text-[#5c4842]  w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`caretaking-${animal.toLowerCase()}`}
                    className="block font-medium mb-2"
                  >
                    Perawatan kandang
                  </label>
                  <input
                    type="date"
                    id={`caretaking-${animal.toLowerCase()}`}
                    value={caretaking}
                    onChange={(e) => setCaretaking(e.target.value)}
                    className="bg-[#fdf9f4] text-[#5c4842] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol navigasi di luar konten */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-[-2rem] bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
          onClick={handlePrevious}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-[-2rem] bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-brown-800 text-white bg-[#5c4842] px-4 py-2 rounded-md hover:bg-brown-700"
        >
          Simpan
        </button>
      </div>

      {/* Notification Section */}
      <div className="mt-8 bg-[#fdf9f4] text-[#5c4842] rounded-lg p-4">
        <h3 className="text-xl font-semibold text-center mb-4">Notifikasi</h3>
        <div className="space-y-2">
          {notifications.map((notif, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-md p-2 flex items-center justify-between"
            >
              <span>{notif}</span>
              <span className="text-gray-600">&#x1f4ac;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PemberianPage;
