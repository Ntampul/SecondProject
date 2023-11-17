import React from 'react'
import SideBar from './SideBar'
import Chat from './Chat'

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