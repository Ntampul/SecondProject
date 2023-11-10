import React, { useState } from 'react';
import { BsFillBellFill, } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";


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
      <span className="title">Sign In with touch ID</span><br></br>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full py-2 px-3 border rounded-md"
        /> <br></br>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full py-2 px-3 border rounded-md"
        /><br></br>
        <button className="button">Login</button><br></br>
        <span className='OR'> OR </span><br></br>
        <span className='google'> <FcGoogle size="40" /> </span>

      
      </form>
      <p> Don't have an account? Register</p>
    </div>
  
  );
};

export default RegisterWithOTP;
