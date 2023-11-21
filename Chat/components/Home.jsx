import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'
import Navbar from './Navbar'



const Home = () => {
  return (
    <div className='Home'>
        <div className="Container">

            <Navbar /><br></br>
            <SideBar/><br></br>
            <Chat/>
            

        </div>

    </div>
  )
}

export default Home