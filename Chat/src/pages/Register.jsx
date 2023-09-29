import React from 'react'
import  './Register.css'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Mthunzi Chat</span>
            <span className='title'>Register</span>
        <form>
            <input type= "text" placeholder='display name' />
            <input type= "email" placeholder='email' />
            <input type= "password" placeholder='password' />
           
            <button> Sign up</button>
        </form>
        <p> you do have an account? Login</p>
     </div>
    </div>
  )
}

export default Register