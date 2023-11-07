import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Register from './pages/Register.jsx' 
//import RegisterWithOTP from './pages/RegisterWithOTP.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Register />
    {/* <RegisterWithOTP /> */}
  </React.StrictMode>
)
