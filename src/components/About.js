import React from 'react'
import { Footer } from './common/Footer'
import { Navbar } from './common/navbar/Navbar'
import { Cover } from './home/Cover'
import { CoverTwo } from './home/CoverTwo';

const CoverTwoData={
    title:"About"
}

const aboutUs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const About = () => {
  return (
    <div className='AboutWrapper'>
        <Navbar/>
        <CoverTwo data={CoverTwoData}/>
        <div className='normalText'>{aboutUs}</div>
        <Footer/>
    </div>
  )
}
