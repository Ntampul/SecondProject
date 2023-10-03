import React from 'react';
import './Register.css';
import { BsFillBellFill } from "react-icons/bs"; // Import the bell icon


const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'><BsFillBellFill /><br></br> ChatHub</span> {/* Include the bell icon */}
        <span className='title'>SignUp</span>
        <form>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>SignUp</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
}
export default Register;
