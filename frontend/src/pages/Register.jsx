import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('BUYER');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response = await axios.post('http://localhost:8082/register', { username, password, role });
     console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="BUYER">Buyer</option>
        <option value="SELLER">Seller</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
    </div>
  )
}
