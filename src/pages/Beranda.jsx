import React from 'react';

const Beranda = () => {
  return (
    <div 
    className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg_Beranda.jpeg)' }}>
      {/* Wrapper untuk menyesuaikan padding dengan sidebar dan navbar */}
      <div className="lg:pl-63 pt-16 px-4">
        {/* Container utama dengan warna transparan dan konten */}
        <div className="p-8 rounded-lg  max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6 justify-center sm:justify-start">
            <img src="/Flockly1.png" alt="Flockly Logo" className="w-40 h-auto" />
          </div>

          {/* Deskripsi */}
          <div className="bg-[#6C4F3D] text-white p-6 rounded-md shadow-md">
            <p className="font-medium text-lg leading-relaxed">
              Flockly adalah platform digital yang dirancang untuk membantu peternak, baik pemula maupun berpengalaman.
              Dengan fitur pendataan yang akurat, peternak dapat mencatat jadwal vaksinasi, jadwal perawatan kandang,
              dan jadwal pemberian pakan.
            </p>
          </div>
        </div>

        {/* Cuaca dan Lokasi */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center text-white space-y-2 sm:space-y-4">
          <p className="text-lg font-semibold">Tangerang</p>
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-bold">25°</span>
            <img src="/awan1.png" alt="Weather Icon" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
