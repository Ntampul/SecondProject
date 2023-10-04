import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Register from '../components/Register.jsx' 
import RegisterWithOTP from '../components/RegisterWithOTP.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Register />
    <RegisterWithOTP />
  </React.StrictMode>
)
