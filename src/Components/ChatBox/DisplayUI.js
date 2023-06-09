import React, { useEffect } from 'react'
import OuterHeader from '../Nav/OuterHeader';
import RegisteredDev from '../RegisterDev/RegisteredDev';
import ChatBox from './ChatBox';
import { useSelector, useDispatch  } from 'react-redux';
import { succes_login, createMsg } from '../../Redux/ActionCreator';
import { useLocation } from 'react-router-dom';
import MsgForm from '../Form/msgForm';

function DisplayUI() {
  const dispatch = useDispatch();
  const login_stat = useSelector(stat => stat.login)
  const register_developers = useSelector(stat => stat.registerDev)
  console.log("dev",register_developers)
  const location = useLocation();
  console.log(location);
  console.log("login_stat", login_stat)

  useEffect(() => {
    if (login_stat.isAuthenticated === false) {
      dispatch(succes_login());
    }
  }, [])

  return (
    <>
    <OuterHeader />
    <div className='chatbox d-flex'>
      <RegisteredDev users={register_developers} />
      <div className='wrapper'>
        { null }
      </div>
    </div>
    </>
  )
}

export default DisplayUI;