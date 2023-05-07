import React, { useEffect } from 'react'
import OuterHeader from '../Nav/OuterHeader';
import RegisteredDev from '../RegisterDev/RegisteredDev';
import ChatBox from './ChatBox';
import { useSelector, useDispatch  } from 'react-redux';
import { succes_login } from '../../Redux/ActionCreator';

function DisplayUI() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(stat => stat.login)
  console.log("login status", loginStatus.user)

  useEffect(() => {
    succes_login()
  })

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