import React, { useState } from 'react';
import { BsFillBellFill, BsEye, BsEyeSlash } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const RegisterWithOTP = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here using formData.email and formData.password
    console.log('Login logic goes here');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="formOTP modal-content absolute bg-white rounded-lg p-6 text-center shadow-md ">
      <span className='logo'><BsFillBellFill color="#7d8243" /><br /> ChatHub</span>
      <span className="title">Sign In with touch ID</span><br />
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full py-2 px-3 border rounded-md"
        /> <br />
        <div className="password-input relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full py-2 px-3 border rounded-md pr-10" // Added pr-10 for padding on the right
          />
          <button
            type="button"
            className="toggle-password absolute right-3 top-2 cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </button>
        </div>
        <br />
        <button className="button">Login</button><br />
        <span className='OR'> OR </span><br />
        <span className='google'> <FcGoogle size="40" /> </span>
        <p> Don't have an account? Register</p>
      </form>
      <div className="background-color">
        <p>Help?</p>
      </div>
    </div>
  );
};

export default RegisterWithOTP;
