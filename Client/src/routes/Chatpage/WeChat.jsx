import React from 'react'
import '../Chatpage/chatpage.css'
import { useEffect, useRef } from 'react';
import NewPrompt from '../../Component/newPrompt/NewPrompt';

const WeChat = () => {
   

    return (
    <div className="Chatpage">
      <div className="wrapper">
        <div className="Chat">
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <div className='Message'>Test message from AI</div>
          <div className='user1'>Test message from user</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  )
}

export default WeChat
