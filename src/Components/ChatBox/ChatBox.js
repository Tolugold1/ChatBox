import React, { useState, useEffect, useRef } from 'react'
import "./ChatBox.Styles.scss"

function ChatBox(props) {/* 
  const [ type, setType ] = useState(); */
  const articleRef = useRef(null)
  useEffect(() => {
		articleRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}, []);
  let side;
  if (props.type === "owner") {
    side = "justify-content-end  owner"
  } else if (props.type === "client") {
    side = "justify-content-start client"
  }
  return (
    <div className='chat_box'>
      <div className={`message_body d-flex ${side} `} ref={articleRef}>
        <div>
          <p className='message'>
            Hello, how far, how was your night
          </p>
          <h6 className="text-end" style={{ fontSize: ".5em"}}>1:37pm</h6>
        </div>
      </div>
    </div>
  )
}

export default ChatBox