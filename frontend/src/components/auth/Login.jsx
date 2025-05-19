import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../imgs/logo/logo.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleParentLogin = (e) => {
        e.preventDefault();
        // Thêm logic xác thực đăng nhập phụ huynh ở đây
        console.log('Đăng nhập phụ huynh với:', { email, password });
        
        // Giả lập đăng nhập thành công và chuyển hướng
        navigate('/parent-dashboard');
    };

    const handleTeacherLogin = (e) => {
        e.preventDefault();
        // Thêm logic xác thực đăng nhập giáo viên ở đây
        console.log('Đăng nhập giáo viên với:', { email, password });
        
        // Giả lập đăng nhập thành công và chuyển hướng
        navigate('/teacher-dashboard');
    };

    return (
        <div className="auth">
            <div className="auth-container">
                <div className="auth-card">
                    <Link to="/" className="back-button">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M10 19L3 12L10 5"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                            <path
                            d="M3 12H21"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </Link>

                    <div className="logo">
                        <img
                            src={logo}
                            alt="VRA Logo"
                            className="vra-logo"
                        />
                    </div>

                    <h1 className="welcome-text">Chào mừng đến với VRA</h1>

                    <form className="auth-form">
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

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>

                        <div className="auth-buttons">
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-login-parent" 
                                onClick={handleParentLogin}
                            >
                                ĐĂNG NHẬP (PHỤ HUYNH)
                            </button>

                            <button 
                                type="button" 
                                className="btn btn-primary btn-login-teacher"
                                onClick={handleTeacherLogin}
                            >
                                ĐĂNG NHẬP (GIÁO VIÊN)
                            </button>
                        </div>

                        <div className="form-link">
                            <Link to="/forgot-password">Quên mật khẩu?</Link>
                        </div>
                        
                        <div className="form-link register-link">
                            <span>Chưa có tài khoản? </span>
                            <Link to="/register">Đăng ký ngay</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;