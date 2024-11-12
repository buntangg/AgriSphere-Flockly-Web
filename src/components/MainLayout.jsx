import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, ClipboardList, Calendar, Settings, Home, User } from 'lucide-react';

const MainLayout = ({ children }) => {
  // Sidebar Component inline
  const Sidebar = () => {
    const navigate = useNavigate();
    
    const menuItems = [
      { title: 'Beranda', icon: <Home className="w-5 h-5" />, to: '/beranda' },
      { title: 'Stok', icon: <BarChart3 className="w-5 h-5" />, to: '/stok' },
      { title: 'Laporan', icon: <ClipboardList className="w-5 h-5" />, to: '/laporan' },
      { title: 'Jadwal', icon: <Calendar className="w-5 h-5" />, to: '/jadwal' },
      { title: 'Pengaturan', icon: <Settings className="w-5 h-5" />, to: '/pengaturan' },
    ];

   
    return (
      <div className="fixed left-0 top-0 h-screen w-48 bg-[#F4EDE7] border-r border-gray-950 flex flex-col z-10">
        {/* Logo Container */}
        <div className="p-4">
          <div className="flex items-center gap-2">
            <img
              src="/Flockly1.png"
              alt="Flockly Logo"
              className="w-19 h-10"
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 hover:bg-[#d0c3b5] cursor-pointer"
              onClick={() => navigate(item.to)}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* Bottom House Section */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-12 -ml-2">
            <div className="w-40 h-10">
              <img
                src="/rumah_2.png"
                alt="House"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Rest of the MainLayout component 
  const Navbar = () => {
    return (
      <div className="fixed top-0 left-48 right-0 h-16 bg-[#F4EDE7] border-b border-gray-950 px-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <img
            src="/ciken.png"
            alt="Chicken Icon"
            className="w-15 h-12"
          />
          <img
            src="/telor.png"
            alt="Telor"
            className="w-9 h-7 mt-5"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100">
            <User className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Frans Rathore</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="pl-48">
        <Navbar />
        <main className="pt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;