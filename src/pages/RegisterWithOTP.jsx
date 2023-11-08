import React, { useState } from 'react';
import { BsFillBellFill, BsArrowLeft, BsEyeSlash } from "react-icons/bs";


const RegisterWithOTP = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here using formData.email and formData.password
    console.log('Login logic goes here');
  };

  return (
    <div className="formOTP modal-content absolute bg-white rounded-lg p-6 text-center shadow-md ">
 <span className='logo'><BsFillBellFill color="#7d8243" /><br></br> ChatHub</span>
      <span className="title">Sign In with touch ID</span>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full py-2 px-3 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full py-2 px-3 border rounded-md"
        />
        <button className="button">Login</button>
      </form>
      <p> Don't have an account? Register</p>
    </div>
  );
};

export default RegisterWithOTP;
