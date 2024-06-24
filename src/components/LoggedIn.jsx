import React from 'react'
import Navbar from "../components/Navbar";
import HeroNav from "../components/Hero/HeroNav"
import Post from "../components/Hero/Post"
import HeroContent from "../components/Hero/HeroContent"


const LoggedIn = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-[80%] h-full m-auto pt-6">
          <HeroContent loggedin={true}/>
      </div>
    </div>
  )
}

export default LoggedIn