import React from 'react'
import OuterHeader from '../Nav/OuterHeader';
import RegisteredDev from '../RegisterDev/RegisteredDev';
import ChatBox from './ChatBox';

function DisplayUI() {
  return (
    <>
    <OuterHeader />
    <div className='chatbox d-flex'>
      <RegisteredDev />
      <ChatBox type="owner"/>
    </div>
    </>
  )
}

export default DisplayUI;