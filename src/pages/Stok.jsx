import React, { useState } from 'react';


const Stok = () => {
  const [data, setData] = useState([]);
  const [formInput, setFormInput] = useState({
    tanggal: '',
    jenisUnggas: '',
    jumlahUnggas: '',
    jumlahTelur: '',
    jumlahDaging: '',
    keterangan: '',
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formInput.tanggal || !formInput.jenisUnggas) {
      alert('Harap isi Tanggal dan Jenis Unggas!');
      return;
    }
    setData([...data, formInput]);
    setShowNotification(true);

    setFormInput({
      tanggal: '',
      jenisUnggas: '',
      jumlahUnggas: '',
      jumlahTelur: '',
      jumlahDaging: '',
      keterangan: '',
    });

    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen ">
      
      <div className="w-full max-w-md  rounded-lg  bg-[#d9d1c2] shadow-md p-8 mb-11">
        <h2 className="text-center text-lg font-semibold text-white bg-[#5c4842] py-2 px-4 rounded-md mb-6">
          Catatan Produksi
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="text-[#5c4842] w-1/3">Tanggal</label>
            <input 
              type="date" 
              name="tanggal"
              value={formInput.tanggal}
              onChange={handleChange}
              className="w-2/3 p-2 border border-[#d4c6b2] rounded-md bg-[#fdf9f4] text-[#5c4842]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-[#5c4842] w-1/3">Jenis Unggas</label>
            <select 
              name="jenisUnggas"
              value={formInput.jenisUnggas}
              onChange={handleChange}
              className="w-2/3 p-2 border border-[#d4c6b2] rounded-md bg-[#fdf9f4] text-[#5c4842]"
            >
              <option value="">Pilih jenis</option>
              <option>Ayam</option>
              <option>Bebek</option>
              <option>Puyuh</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-[#5c4842] w-1/3">Jumlah Unggas</label>
            <input 
              type="number" 
              name="jumlahUnggas"
              value={formInput.jumlahUnggas}
              onChange={handleChange}
              className="w-2/3 p-2 border border-[#d4c6b2] rounded-md bg-[#fdf9f4] text-[#5c4842]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-[#5c4842] w-1/3">Jumlah Telur</label>
            <input 
              type="number" 
              name="jumlahTelur"
              value={formInput.jumlahTelur}
              onChange={handleChange}
              className="w-2/3 p-2 border border-[#d4c6b2] rounded-md bg-[#fdf9f4] text-[#5c4842]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-[#5c4842] w-1/3">Jumlah Daging</label>
            <input 
              type="number" 
              name="jumlahDaging"
              value={formInput.jumlahDaging}
              onChange={handleChange}
              className="w-2/3 p-2 border border-[#d4c6b2] rounded-md bg-[#fdf9f4] text-[#5c4842]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-[#5c4842] w-1/3">Keterangan</label>
            <input 
              type="text" 
              name="keterangan"
              value={formInput.keterangan}
              onChange={handleChange}
              className="w-2/3 p-2 border border-[#d4c6b2] rounded-md bg-[#fdf9f4] text-[#5c4842]"
            />
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-[#5c4842] text-white py-2 px-6 rounded-md mt-4 hover:bg-[#4e3f39] transition"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>

      {/* Tabel Section */}
      <div className="w-full max-w-4xl bg-[#d9d1c2] rounded-lg shadow-md p-6">
         <h2 className="text-center text-lg font-semibold mb-6">
          Daftar Produksi
        </h2>
        <table className="min-w-full border border-[#5C4842]">
          <thead>
            <tr className="bg-[#5c4842] text-white">
              {['Tanggal', 'Jenis', 'Jumlah Unggas', 'Telur', 'Daging', 'Keterangan'].map((header) => (
                <th key={header} className="p-3 border">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="text-[#5c4842] bg-[#fdf9f4] hover:bg-[#f0e9e2]">
                  <td className="p-3 border">{item.tanggal}</td>
                  <td className="p-3 border">{item.jenisUnggas}</td>
                  <td className="p-3 border">{item.jumlahUnggas}</td>
                  <td className="p-3 border">{item.jumlahTelur}</td>
                  <td className="p-3 border">{item.jumlahDaging}</td>
                  <td className="p-3 border">{item.keterangan}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">Tidak ada data</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-center">
            <button 
              type="button" 
              className="bg-[#5c4842] text-white py-2 px-6 rounded-md mt-4 hover:bg-[#4e3f39] transition"
            >
              Tambah
            </button>
          </div>
      </div>
    </div>
  );
};

export default Stok;
