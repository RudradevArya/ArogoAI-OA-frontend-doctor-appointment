import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient'
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      console.log('Sending request to:', endpoint);
      console.log('Request data:', formData);
      const response = await api.post(endpoint, formData);
      console.log('Auth response:', response.data);
      localStorage.setItem('token', response.data.token);
      setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (error) {
      console.error('Full error:', error);
      console.error('Error response:', error.response);
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };
  
  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        {!isLogin && (
          <select
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default Auth;