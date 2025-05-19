import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../imgs/logo/logo.svg';

const Header = () => {
  const [showFamilyDropdown, setShowFamilyDropdown] = useState(false);
  const [showPartnerDropdown, setShowPartnerDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(''); // 'parent' hoặc 'teacher'
  const navigate = useNavigate();

  const familyRef = useRef(null);
  const partnerRef = useRef(null);
  const authRef = useRef(null);

  // Kiểm tra trạng thái đăng nhập khi component được load
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const savedUserType = localStorage.getItem('userType');
      if (token) {
        setIsLoggedIn(true);
        setUserType(savedUserType || '');
      } else {
        setIsLoggedIn(false);
        setUserType('');
      }
    };

    checkAuth();
    // Lắng nghe sự kiện đăng nhập/đăng xuất để cập nhật giao diện
    window.addEventListener('auth-change', checkAuth);
    
    return () => {
      window.removeEventListener('auth-change', checkAuth);
    };
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavigate = (path) => {
    navigate(path);
    setShowFamilyDropdown(false);
    setShowPartnerDropdown(false);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogout = () => {
    // Xóa thông tin đăng nhập
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    
    // Cập nhật state
    setIsLoggedIn(false);
    setUserType('');
    
    // Phát sự kiện để thông báo thay đổi trạng thái đăng nhập
    window.dispatchEvent(new Event('auth-change'));
    
    // Chuyển hướng về trang chủ
    navigate('/');
  };

  const handleDashboard = () => {
    if (userType === 'parent') {
      navigate('/parent-dashboard');
    } else if (userType === 'teacher') {
      navigate('/teacher-dashboard');
    }
  };

  const handleClickOutside = (e) => {
    if (
      familyRef.current &&
      !familyRef.current.contains(e.target) &&
      partnerRef.current &&
      !partnerRef.current.contains(e.target) &&
      authRef.current &&
      !authRef.current.contains(e.target)
    ) {
      setShowFamilyDropdown(false);
      setShowPartnerDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-left" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="nav">
        <div
          className="nav-item"
          ref={familyRef}
          onClick={() => {
            setShowFamilyDropdown(!showFamilyDropdown);
            setShowPartnerDropdown(false);
          }}
        >
          Gia đình ▾
          {showFamilyDropdown && (
            <div className="dropdown">
              <div onClick={() => handleNavigate('/how-it-works')}>Cách thức hoạt động</div>
              <div onClick={() => handleNavigate('/game')}>Trò chơi</div>
              <div onClick={() => handleNavigate('/testimonials')}>Ý kiến</div>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          ref={partnerRef}
          onClick={() => {
            setShowPartnerDropdown(!showPartnerDropdown);
            setShowFamilyDropdown(false);
          }}
        >
          Dành cho Đối tác và Nhà cung cấp ▾
          {showPartnerDropdown && (
            <div className="dropdown">
              <div onClick={() => handleNavigate('/doctor')}>Bác sĩ</div>
              <div onClick={() => handleNavigate('/school')}>Trường</div>
              <div onClick={() => handleNavigate('/healthcare')}>Bảo hiểm y tế</div>
            </div>
          )}
        </div>
      </div>

      <div className="auth-buttons" ref={authRef}>
        {isLoggedIn ? (
          <>
            <button className="dashboard-btn" onClick={handleDashboard}>
              {userType === 'parent' ? 'BẢNG ĐIỀU KHIỂN PHỤ HUYNH' : 'BẢNG ĐIỀU KHIỂN GIÁO VIÊN'}
            </button>
            <button className="logout-btn" onClick={handleLogout}>ĐĂNG XUẤT</button>
          </>
        ) : (
          <>
            <button className="login-btn" onClick={handleLogin}>ĐĂNG NHẬP</button>
            <button className="register-btn" onClick={handleRegister}>ĐĂNG KÝ</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;