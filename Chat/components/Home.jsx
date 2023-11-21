import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'



const Home = () => {
  return (
    <div className='Home'>
        <div className="Container">
            <SideBar/>
            <Chat/>

        </div>

    </div>
  )
}

export default Home