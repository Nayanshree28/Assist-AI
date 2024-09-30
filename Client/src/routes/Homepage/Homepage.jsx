import React, { useState } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {

  const[typingStatus,setTypingStatus] = useState("human1")


  return (
    <div className='homePage'>
      {/* <img src="/orbital.png" alt="" className='orbital'/> */}
         <div className="left">
          <h1 className='Head1'>ASSIST AI</h1>
          <h2>Supercharge your creativity and productivity</h2>
          <h3>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem nesciunt quis consectetur itaque voluptates numquam e
             st ipsam harum laudantium tempora, molestiae ab neque quasi dicta iure reprehenderit nostrum saepe?
          </h3>
          <Link to='/dashboard'>Get Started</Link>
         </div>
         <div className="right">
           <div className="imgContainer">
              <div className="bgContainer">
                <div className="bg"></div>
              </div>
              <img src="/robot-artificial-intelligence-ai.svg" alt=""className='bot' />
              <div className="chat">
                <img src={typingStatus === "human1" ? "/human1.jpeg": typingStatus === "human2" ? "/human2.jpeg": "/bot.png"} alt="" />
              <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Human1:We produce food for Mice',
                      2000, 
                      () =>{
                        setTypingStatus("bot");
                      },
                      'Bot:We produce food for Hamsters',
                      2000,
                      () =>{
                        setTypingStatus("human2");
                      },
                      'Human2:We produce food for Guinea Pigs',
                      2000,
                      () =>{
                        setTypingStatus("bot");
                      },
                      'Bot:We produce food for Chinchillas',
                      2000,
                      () =>{
                        setTypingStatus("human1");
                      },
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    omitDeletionAnimation={true}
              />
              </div>
           </div>
         </div>
         <div className="terms">
          <img src="/logo.png" alt="" className='terms-img'/>
          <div className="Links">
            <Link to="/">Terms of Services</Link>
             <span>|</span>
            <Link to="/">Privacy Policy</Link>
          </div>
         </div>
      </div>
  )
}

export default Homepage
