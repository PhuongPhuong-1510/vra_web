import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../imgs/logo/logo.svg';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thêm logic gửi yêu cầu đặt lại mật khẩu
        console.log('Gửi yêu cầu đặt lại mật khẩu cho:', email);
        
        // Hiển thị thông báo
        setMessage('Yêu cầu đặt lại mật khẩu đã được gửi đến email của bạn');
        
        // Sau 3 giây, chuyển hướng về trang đăng nhập
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    };

    return (
        <div className="auth">
            <div className="auth-container">
                <div className="auth-card">
                    <Link to="/login" className="back-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19L3 12L10 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                    <div className="logo">
                        <img src={logo} alt="VRA Logo" className="vra-logo" />
                    </div>

                    <h1 className="welcome-text">Chào mừng đến với VRA</h1>

                    <h2 className="subtitle">Đặt lại mật khẩu</h2>

                    <p className="instructions">
                        Nhập địa chỉ email bạn đã sử dụng để đăng ký VRA và chúng tôi sẽ gửi cho bạn mật khẩu bạn đăng ký
                    </p>

                    {message && <div className="success-message">{message}</div>}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>

                        <div className="auth-buttons">
                            <button type="submit" className="btn btn-send">
                                GỬI ĐI
                            </button>
                        </div>
                        
                        <div className="form-link login-link">
                            <Link to="/login">Quay lại đăng nhập</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;