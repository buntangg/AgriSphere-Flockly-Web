import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Beranda from './pages/Beranda';
import Stok from './pages/Stok';
import Laporan from './pages/Laporan';
import Jadwal from './pages/Jadwal';
import Pengaturan from './pages/Pengaturan';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Beranda />
              </MainLayout>
            </ProtectedRoute>
          }
        />
          <Route
          path="/beranda"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Beranda />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/stok"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Stok />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/laporan"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Laporan />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/jadwal"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Jadwal />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pengaturan"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Pengaturan />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirect Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;