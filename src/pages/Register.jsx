import React from 'react';
import './Register.css';
import { BsFillBellFill } from "react-icons/bs"; // Import the bell icon
import { IoFingerPrintSharp } from "react-icons/io5";
import Add from "../assets/img/avata.jpg";

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'><IoFingerPrintSharp color="#7d8243" /><br></br> ChatHub</span> {/* Include the bell icon */}
        <span className='title'>Sign in with touch ID</span>
        <span className='tId'>Use your touch ID for faster and easier access to your account</span>
       
          <button className='button'>SignUp</button>
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" className="avatar-label">
  <div className="avatar-container">
    <img src={Add} alt="Add Icon" className="add-icon" />
    <span className="label-text">Add an avatar</span>
  </div>
  <input type="file" id="file" style={{ display: 'none' }} />
</label>

       <p>New User? Sign Up</p>
       <span className='logo'><BsFillBellFill color="#7d8243" /></span> {/* Include the bell icon */}
       

      </div>
    </div>
  );
}
export default Register;
