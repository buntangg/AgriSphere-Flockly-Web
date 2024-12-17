import React, { useState, useEffect } from "react";
import axios from "axios";

const Stok = () => {
  const [data, setData] = useState([]);
  const [formInput, setFormInput] = useState({
    tanggal: "",
    jenisUnggas: "",
    jumlahUnggas: "",
    jumlahTelur: "",
    jumlahDaging: "",
    keterangan: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  // Fetch data saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stock");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Memanggil fetchData pertama kali
    fetchData();

    // Membuat interval untuk memanggil fetchData secara berkala
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formInput.tanggal || !formInput.jenisUnggas) {
      alert("Harap isi Tanggal dan Jenis Unggas!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/stock",
        formInput
      );
      setData([...data, response.data.data]); // Menambah data baru ke state
      setShowNotification(true);

      // Reset form
      setFormInput({
        tanggal: "",
        jenisUnggas: "",
        jumlahUnggas: "",
        jumlahTelur: "",
        jumlahDaging: "",
        keterangan: "",
      });

      // Hilangkan notifikasi setelah beberapa saat
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  // Fungsi untuk menghapus data berdasarkan ID
  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`http://localhost:5000/api/produksi/${id}`);
        setData(data.filter((item) => item.id !== id)); // Update state
        alert("Data berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting data:", error);
        alert("Gagal menghapus data.");
      }
    }
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
        <h2 className="text-center text-lg font-semibold text-[#5c4842] mb-4">
          Daftar Produksi
        </h2>
        <table className="min-w-full border border-[#5C4842]">
          <thead>
            <tr className="bg-[#5c4842] text-white">
              <th className="p-3 border">Tanggal</th>
              <th className="p-3 border">Jenis</th>
              <th className="p-3 border">Jumlah Unggas</th>
              <th className="p-3 border">Telur</th>
              <th className="p-3 border">Daging</th>
              <th className="p-3 border">Keterangan</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="text-[#5c4842] bg-[#fdf9f4] hover:bg-[#f0e9e2]"
                >
                  <td className="p-3 border">
                    {item.date
                      ? new Intl.DateTimeFormat("id-ID", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(item.date))
                      : "-"}
                  </td>
                  <td className="p-3 border">{item.poultry_type}</td>
                  <td className="p-3 border">{item.quantity}</td>
                  <td className="p-3 border">{item.egg_count}</td>
                  <td className="p-3 border">{item.meat_count}</td>
                  <td className="p-3 border">{item.description}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stok;
