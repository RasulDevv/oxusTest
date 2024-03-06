import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import ProgressBar from "@ramonak/react-progress-bar";

const MainLayOut = ({completed}) => {
  return (
    <>
      <Navbar/>
      <ProgressBar completed={completed} maxCompleted={100}  className="progressbar" />   
      <div className='wrapperr'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayOut
