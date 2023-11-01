import React from 'react';
import './Register.css';
import { BsFillBellFill } from "react-icons/bs"; // Import the bell icon
import Add from "../assets/img/avata.jpg";

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'><BsFillBellFill color="white" /><br></br> ChatHub</span> {/* Include the bell icon */}
        <span className='title'>SignUp</span>
        <form>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button className='button'>SignUp</button>
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" className="avatar-label">
  <div className="avatar-container">
    <img src={Add} alt="Add Icon" className="add-icon" />
    <span className="label-text">Add an avatar</span>
  </div>
  <input type="file" id="file" style={{ display: 'none' }} />
</label>

        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
}
export default Register;
