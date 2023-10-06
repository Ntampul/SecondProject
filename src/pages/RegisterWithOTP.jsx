import React, { useState } from 'react';
//import './Register.css';
import { BsFillBellFill } from "react-icons/bs";

const RegisterWithOTP = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    otp: '',
    isOtpVerified: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (formData.isOtpVerified) {
      // Perform actual registration here
      console.log('Registration successful!');
    } else {
      // Simulate OTP verification (you would replace this with actual OTP verification logic)
      const simulatedOtp = '123456'; // Simulated OTP value
      if (formData.otp === simulatedOtp) {
        setFormData({ ...formData, isOtpVerified: true });
      } else {
        alert('OTP verification failed. Please try again.');
      }
    }
  };

  return (
    <div className="formCont">
      <div className="formOTP">
      <span className='logo'><BsFillBellFill color="blue" /><br></br> ChatHub</span>
        <span className="title">SignIn</span>
        <form onSubmit={handleSignUp}>

          {formData.isOtpVerified ? (
            <button className="button">SignIn</button>
          ) : (
            <>
              <input
                type="text"
                name="otp"
                placeholder="OTP"
                value={formData.otp}
                onChange={handleChange}
                required
              />
              <button className="buttonOTP">Verify OTP</button>
            </>
          )}
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default RegisterWithOTP;
