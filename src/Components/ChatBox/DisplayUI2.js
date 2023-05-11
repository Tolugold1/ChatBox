import React, { useEffect } from 'react'
import OuterHeader from '../Nav/OuterHeader';
import RegisteredDev from '../RegisterDev/RegisteredDev';
import ChatBox from './ChatBox';
import { useSelector, useDispatch  } from 'react-redux';
import { succes_login, createMsg } from '../../Redux/ActionCreator';
import { useLocation } from 'react-router-dom';
import MsgForm from '../Form/msgForm';
import { useParams } from 'react-router-dom';

function DisplayUI2() {
  const dispatch = useDispatch();
  const register_developers = useSelector(stat => stat.registerDev);
  const allmsg = useSelector(stat => stat.allmsg);
  console.log("allmsg", allmsg)
  console.log("dev",register_developers)
  const location = useLocation();
  console.log(location);
  const params = useParams();
  console.log("params", params);

  useEffect(() => {
  }, [])

  return (
    <>
    <OuterHeader />
    <div className='chatbox d-flex'>
      <RegisteredDev users={register_developers} />
      <div className='wrapper'>
        { location.pathname === `Home/${params}` ? null : <ChatBox allmsg={allmsg.msgs} type="client"/> } 
        <div className='d-flex justify-content-center align-items-center'>
          <MsgForm />
        </div>
      </div>
    </div>
    </>
  )
}

export default DisplayUI2;