import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Laporan.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Laporan = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Ayam', 'Bebek', 'Puyuh'];

  const handleNext = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
  };

  const handlePrevious = () => {
    setActiveTab((prevTab) => (prevTab - 1 + tabs.length) % tabs.length);
  };

  // Sample data for each tab
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: `Pendapatan ${tabs[activeTab]}`,
        data: activeTab === 0 
          ? [100, 200, 300, 400, 500, 600, 700]  // Ayam Data
          : activeTab === 1 
          ? [150, 250, 350, 450, 550, 650, 750]  // Bebek Data
          : [200, 300, 400, 500, 600, 700, 800], // Puyuh Data
        borderColor: '#F3B725',
        backgroundColor: 'rgba(243, 183, 37, 0.3)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[##5c4842] p-4">
      {/* Top Navigation Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-6 rounded-md ${activeTab === 0 ? 'bg-[#d9d1c2]' : 'bg-[#f1e9db]'} shadow-md`}
          onClick={() => setActiveTab(0)}
        >
          Grafik Performa
        </button>
        <button className="py-2 px-6 bg-[#d9d1c2] rounded-md shadow-md">
          Laporan Produksi
        </button>
      </div>

      {/* Main Container with Slide Animation */}
      <div className="relative overflow-hidden w-full max-w-5xl bg-[#d9d1c2] rounded-lg shadow-lg">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeTab * 100}%)` }}>
          {/* Ayam, Bebek, Puyuh Tabs Content */}
          {tabs.map((tab, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row bg-[#d9d1c2]">
              {/* Input Section */}
              <div className="w-full md:w-1/3 bg-[#e7dfd3] p-6 space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Harga Pakan</label>
                  <input className="bg-[#fdf9f4] text-[#5c4842] w-full p-3 rounded-md border border-gray-300 " type="text" placeholder="Masukkan harga pakan" />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pakan Perhari</label>
                  <select className="w-full p-3 rounded-md border border-gray-300 bg-[#fdf9f4] text-[#5c4842]">
                    <option>Pilih Pakan</option>
                    <option value="option1">Dedak</option>
                    <option value="option2">Bekatul</option>
                    <option value="option2">Pelet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Penjualan Telur / hari</label>
                  <input className="w-full p-3 rounded-md border border-gray-300 bg-[#fdf9f4] text-[#5c4842]" type="text" placeholder="Jumlah telur per hari" />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Penjualan Daging / hari</label>
                  <input className="w-full p-3 rounded-md border border-gray-300 bg-[#fdf9f4] text-[#5c4842]" type="text" placeholder="Jumlah daging per hari" />
                </div>

                <button className="w-full mt-4 py-3 bg-[#5c4842] text-white rounded-md shadow-md hover:bg-[#c8c0b4]">Simpan</button>
              </div>

              {/* Graph Section */}
              <div className="w-full md:w-2/3 p-6 bg-[#d9d1c2]">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={handlePrevious} className="text-gray-600 hover:text-gray-800 text-xl font-bold">
                    &lt;
                  </button>
                  <h2 className="text-lg font-semibold text-gray-700">{tab}</h2>
                  <button onClick={handleNext} className="text-gray-600 hover:text-gray-800 text-xl font-bold">
                    &gt;
                  </button>
                </div>

                {/* Line Chart for "Grafik pendapatan" */}
                <div className="w-full h-80 bg-[#f1e9db] rounded-md flex items-center justify-center p-4">
                  <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laporan;
