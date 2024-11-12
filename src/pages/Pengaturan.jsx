import React, { useState } from 'react';

const Pengaturan = () => {
  const [currentView, setCurrentView] = useState('menu'); // menu, profile, akun, atau logout
  const [showModal, setShowModal] = useState(false);

  // State untuk menyimpan data profil pengguna
  const [profilData, setProfilData] = useState({
    nama: '',
    jenisKelamin: '',
    zonaWaktu: '',
    alamat: '',
    kota: '',
    kecamatan: ''
  });

  // Fungsi untuk menangani perubahan input pada profil pengguna
  const handleInputChange = (e) => {
    setProfilData({ ...profilData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menyimpan data profil pengguna
  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert('Profil pengguna telah disimpan!');
    setCurrentView('akun');
  };

  const handleLogout = () => {
    setShowModal(false);
    alert('Anda telah keluar');
    setCurrentView('menu');
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* Tampilan Menu Utama */}
      {currentView === 'menu' && (
        <div className="w-[400px] p-6 bg-[#9c8b74] rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold mb-4 text-[#4a3d35] flex items-center">
            <span className="mr-2">⚙️</span> Pengaturan
          </h1>
          <div className="space-y-4">
            <button
              onClick={() => setCurrentView('profile')}
              className="block w-full py-2 text-center bg-[#dcd2c3] text-[#4a3d35] rounded-md hover:bg-[#cfc3b0] transition"
            >
              Profil Pengguna
            </button>
            <button
              onClick={() => setCurrentView('akun')}
              className="block w-full py-2 text-center bg-[#dcd2c3] text-[#4a3d35] rounded-md hover:bg-[#cfc3b0] transition"
            >
              Pengaturan Akun
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="block w-full py-2 text-center bg-[#dcd2c3] text-[#4a3d35] rounded-md hover:bg-[#cfc3b0] transition"
            >
              Keluar
            </button>
          </div>
        </div>
      )}

      {/* Tampilan Profil Pengguna */}
      {currentView === 'profile' && (
        <div className="w-[500px] p-6 bg-[#f8f4eb] rounded-lg shadow-lg">
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="flex justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-[#4a3d35]">Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={profilData.nama}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-[#dcd2c3] rounded-md focus:ring-2 focus:ring-[#9c8b74] focus:outline-none"
                />
              </div>
              <div className="flex-1 ml-4">
                <label className="block text-sm font-medium text-[#4a3d35]">Jenis Kelamin</label>
                <input
                  type="text"
                  name="jenisKelamin"
                  value={profilData.jenisKelamin}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-[#dcd2c3] rounded-md focus:ring-2 focus:ring-[#9c8b74] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-[#4a3d35]">Zona Waktu</label>
                <input
                  type="text"
                  name="zonaWaktu"
                  value={profilData.zonaWaktu}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-[#dcd2c3] rounded-md focus:ring-2 focus:ring-[#9c8b74] focus:outline-none"
                />
              </div>
              <div className="flex-1 ml-4">
                <label className="block text-sm font-medium text-[#4a3d35]">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  value={profilData.alamat}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-[#dcd2c3] rounded-md focus:ring-2 focus:ring-[#9c8b74] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-[#4a3d35]">Kota / Kabupaten</label>
                <input
                  type="text"
                  name="kota"
                  value={profilData.kota}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-[#dcd2c3] rounded-md focus:ring-2 focus:ring-[#9c8b74] focus:outline-none"
                />
              </div>
              <div className="flex-1 ml-4">
                <label className="block text-sm font-medium text-[#4a3d35]">Kecamatan / Kelurahan</label>
                <input
                  type="text"
                  name="kecamatan"
                  value={profilData.kecamatan}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-[#dcd2c3] rounded-md focus:ring-2 focus:ring-[#9c8b74] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                onClick={() => setCurrentView('menu')}
                className="px-4 py-2 bg-[#9c8b74] text-white rounded-md hover:bg-[#7e6e5d] transition"
              >
                Kembali
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#9c8b74] text-white rounded-md hover:bg-[#7e6e5d] transition"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tampilan Pengaturan Akun */}
      {currentView === 'akun' && (
        <div className="w-[500px] p-6 bg-[#f8f4eb] rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-[#4a3d35] mb-4">Pengaturan Akun</h2>
          <div className="space-y-4">
            {Object.keys(profilData).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-[#4a3d35]">{key}</label>
                <input
                  type="text"
                  value={profilData[key]}
                  readOnly
                  className="w-full mt-1 p-2 bg-[#e2ded7] rounded-md focus:outline-none"
                />
              </div>
            ))}
            <button
              onClick={() => setCurrentView('menu')}
              className="px-4 py-2 bg-[#9c8b74] text-white rounded-md hover:bg-[#7e6e5d] transition mt-4"
            >
              Kembali
            </button>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#9c8b74] p-6 rounded-lg shadow-lg text-center">
            <p className="text-white mb-4">Apakah Anda yakin ingin keluar?</p>
            <button onClick={handleLogout} className="px-4 py-2 bg-[#dcd2c3] rounded-md">
              Ya
            </button>
            <button onClick={() => setShowModal(false)} className="ml-4 px-4 py-2 bg-[#dcd2c3] rounded-md">
              Tidak
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Pengaturan;
