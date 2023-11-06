import React, { useState } from 'react';
import './Register.css';
import { BsFillBellFill } from "react-icons/bs";
import { IoFingerPrintSharp } from "react-icons/io5";
import Add from "../assets/img/avata.jpg";

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'><IoFingerPrintSharp color="#7d8243" /><br></br> ChatHub</span>
        <span className='title'>Sign in with touch ID</span>
        <span className='tId'>Use your touch ID for faster and easier access to your account</span>
       
        <button className='button' onClick={openModal}>SignUp</button>

        <label htmlFor="file" className="avatar-label">
          <div className="avatar-container">
            <img src={Add} alt="Add Icon" className="add-icon" />
            <span className="label-text">Add an avatar</span>
          </div>
          <input type="file" id="file" style={{ display: 'none' }} />
        </label>

        <p>New User? Sign Up</p>
        <span className='logo'><BsFillBellFill color="#7d8243" /></span>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>This is your modal content.</p>
              {/* You can add any content you want inside the modal */}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Register;
