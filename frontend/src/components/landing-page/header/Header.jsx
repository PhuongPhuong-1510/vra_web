import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../../imgs/logo/logo.svg';

const Header = () => {
  const [showFamilyDropdown, setShowFamilyDropdown] = useState(false);
  const [showPartnerDropdown, setShowPartnerDropdown] = useState(false);
  const navigate = useNavigate();

  const familyRef = useRef(null);
  const partnerRef = useRef(null);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavigate = (path) => {
    navigate(path);
    setShowFamilyDropdown(false);
    setShowPartnerDropdown(false);
  };

  const handleClickOutside = (e) => {
    if (
      familyRef.current &&
      !familyRef.current.contains(e.target) &&
      partnerRef.current &&
      !partnerRef.current.contains(e.target)
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

      <div className="auth-buttons">
        <button className="login-btn">ĐĂNG NHẬP</button>
        <button className="register-btn">ĐĂNG KÝ</button>
      </div>
    </div>
  );
};

export default Header;
