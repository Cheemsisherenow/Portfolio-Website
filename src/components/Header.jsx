import React from 'react'

const Header = () => {
  return (
    <header className="fixed flex items-center justify-center top-0 left-0 right-0 rounded-3xl h-[7%] mt-[4px] backdrop-blur-md bg-opacity-20 z-50 mx-[2px] bg-[#034567]/20 border border-gray-100/20 shadow-[0_0_10px_rgba(0,200,255,0.4),0_0_30px_rgba(0,200,255,0.3)] ">
        <span className="absolute w-10 h-10 left-[2%]">
            <a target="_blank" rel="noopener noreferrer" className="block w-full h-full" href="https://github.com/Cheemsisherenow">
                <img className="w-full h-full object-contain" src="/Portfolio-Website/github.png"/>
            </a>
        </span>
        <div className="h-[75%] w-[75%] flex justify-around items-center rounded-xl backdrop-blur-md bg-opacity-20 bg-[#034567]/20">
            <a href="#intro">
                Intro
            </a> 
            <a href="#robotics">
                Robotics
            </a>
            <a href="#fbla">
                FBLA
            </a>
            <a href="#cookieRun">
                CRK
            </a>
            <a href="#javaFx">
                JavaFx
            </a>
            <a href="#physics">
                3 Body
            </a>
            <a href="#competition">
                Programming Competitions
            </a>
        </div>
    </header>
  )
}

export default Header
