import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { FcMenu } from 'react-icons/fc'
import "./OuterHeader.styles.scss"

const OuterHeader = ({logout, clearChat}) => {
  const [ open, setOpen ] = useState(false)
  const toggle = () => setOpen(!open);
  return (
    <div className="outer_header row p-4 align-items-center fixed-top">
      <div className="navBrand mr-auto d-flex col">
        <img src="assets/images/login.jpeg" className="avatar" alt='header image'/>
        <div className="ml-3">
          <h4>Welcome, Adeleke</h4>
          <h6>Developers Chatting App</h6>
        </div>
      </div>
      <div className="col d-flex justify-content-end d-md-none d-lg-none d-xl-none">
        <button className=" header_btn d-block d-sm-block d-md-none d-lg-none d-xl-none" onClick={toggle}>
          {open ? <AiOutlineClose /> : <FcMenu />} 
        </button>
      </div>
      <div className="col pr-3 d-none d-sm-none d-md-block">
        <div className=" d-flex justify-content-end">
          <div className="clear_chat" onClick={clearChat}>Clear Chat</div>
          <div className="pipe">|</div>
          <div className="logOut" onClick={logout}>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default OuterHeader;