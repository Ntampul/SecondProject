import React, { useState } from 'react';
import { BsFillBellFill } from "react-icons/bs";

const RegisterWithOTP = ({ closeModal }) => {
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
    
      <div className="formOTP modal-content absolute bg-white rounded-lg p-6 text-center shadow-md ">
        
        <span className='logo'><BsFillBellFill color="#7d8243" /><br></br> ChatHub</span>
        <span className="title">Sign In with touch ID</span>
        <form onSubmit={handleSignUp}>
          {formData.isOtpVerified ? (
            <button className="button">Sign In</button>
          ) : (
            <>
              <input
                type="text"
                name="otp"
                placeholder="OTP"
                value={formData.otp}
                onChange={handleChange}
                required
                className="w-full py-2 px-3 border rounded-md"
              />
              <button className="buttonOTP">Verify OTP</button>
            </>
          )}
        </form>
        <p>Already have an account? Login</p>
       
      </div>
    
  );
};

export default RegisterWithOTP;
