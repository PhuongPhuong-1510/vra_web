import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/landing-page/header/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/Forgot-password';

// Landing page components
import Home from './components/landing-page/feature/feature-home/Home';
import HowItWorks from './components/landing-page/feature/feature-how-it-works/HowItWork';
import Game from './components/landing-page/feature/feature-game/Game';
import Testimonials from './components/landing-page/feature/feature-testimonials/Testimonials';
import Doctor from './components/landing-page/feature/feature-doctor/Doctor';
import School from './components/landing-page/feature/feature-school/School';
import Healthcare from './components/landing-page/feature/feature-healthcare/Healthcare';

// Dashboard components (sẽ được tạo sau)
// import ParentDashboard from './components/dashboards/parent/ParentDashboard';
// import TeacherDashboard from './components/dashboards/teacher/TeacherDashboard';

function App() {
  // Hàm kiểm tra xem người dùng đã đăng nhập chưa
  const isAuthenticated = () => {
    // Thực hiện kiểm tra xem người dùng đã đăng nhập chưa
    // Đây chỉ là ví dụ, bạn nên sử dụng cơ chế xác thực thực tế
    const token = localStorage.getItem('token');
    return !!token;
  };

  // Tạo component bảo vệ route (Protected Route)
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      {/* Header sẽ hiển thị trên tất cả các trang */}
      <Header />
      <Routes>
        {/* Các trang chính */}
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/game" element={<Game />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/school" element={<School />} />
        <Route path="/healthcare" element={<Healthcare />} />

        {/* Các trang xác thực */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Các trang Dashboard (yêu cầu đăng nhập) */}
        {/* <Route path="/parent-dashboard" element={
          <ProtectedRoute>
            <ParentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/teacher-dashboard" element={
          <ProtectedRoute>
            <TeacherDashboard />
          </ProtectedRoute>
        } /> */}
      </Routes>
    </Router>
  );
}

export default App;