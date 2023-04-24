import React from 'react'
import OuterHeader from '../Nav/OuterHeader';
import RegisteredDev from '../RegisterDev/RegisteredDev';


function DisplayUI() {
  return (
    <>
    <OuterHeader />
    <div className='chatbox d-flex align-items-center'>
      <RegisteredDev />
    </div>
    </>
  )
}

export default DisplayUI;