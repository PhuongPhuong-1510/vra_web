import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../imgs/logo/logo.svg';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [teacherCode, setTeacherCode] = useState('');
    const [userType, setUserType] = useState('parent'); // 'parent' hoặc 'teacher'
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Thêm logic đăng ký ở đây
        console.log('Đăng ký với:', { email, password, teacherCode, userType });
        
        // Giả lập đăng ký thành công và chuyển hướng đến trang đăng nhập
        navigate('/login');
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

                    <div className="user-type-toggle">
                        <button 
                            className={`toggle-btn ${userType === 'parent' ? 'active' : ''}`}
                            onClick={() => setUserType('parent')}
                            type="button"
                        >
                            Phụ huynh
                        </button>
                        <button 
                            className={`toggle-btn ${userType === 'teacher' ? 'active' : ''}`}
                            onClick={() => setUserType('teacher')}
                            type="button"
                        >
                            Giáo viên
                        </button>
                    </div>

                    <form className="auth-form" onSubmit={handleRegister}>
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

                        {userType === 'teacher' && (
                            <div className="form-group">
                                <label htmlFor="teacher-code">Mã giáo viên:</label>
                                <input 
                                    type="text" 
                                    id="teacher-code" 
                                    name="teacher-code"
                                    value={teacherCode}
                                    onChange={(e) => setTeacherCode(e.target.value)}
                                    required 
                                />
                            </div>
                        )}

                        <div className="auth-buttons">
                            <button type="submit" className="btn btn-register">
                                ĐĂNG KÝ
                            </button>
                        </div>
                        
                        <div className="form-link login-link">
                            <span>Đã có tài khoản? </span>
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;