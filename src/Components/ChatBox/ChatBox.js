import React, { useState, useEffect, useRef } from 'react'
import "./ChatBox.Styles.scss";
import { useParams } from 'react-router-dom';

function ChatBox(props) {/* 
  const [ type, setType ] = useState(); */
  const params = useParams();
  const p = params.userId.slice(1, params.userId.length)
  const articleRef = useRef(null)
  useEffect(() => {
		articleRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}, []);

  let side;
  for (let i = 0; i <= props.allmsg.length; i++) {
    console.log("visitorId", props.allmsg[i].visitorID)
    if (p === props.allmsg[i].visitorID) {
      for (let i = 0; i <= props.allmsg[i].mymsg.length; i++) {
        if (props.allmsg.mymsg[i].status === "owner") {
          side = "justify-content-end  owner"
        } else if (props.allmsg.mymsg[i].status === 'client') {
          side = "justify-content-start client"
        }
      }
    }
  }

  return (
    <div className='chat_box' ref={articleRef}>
      { props.allmsg.map((data, key) => {
        return (
          <div key={key}>
            { data.visitorID === p ? 
            <div className={`message_body d-flex ${side} `} >
              { data.mymsg.map((msgData, key) => {
                return (
                  <div key={key}>
                    <p className='message'>
                      {msgData.msg}
                    </p>
                    <h6 className="text-end" style={{ fontSize: ".5em"}}>1:37pm</h6>
                  </div>
                )
              })}
            </div> :
            null}
          </div>
        )
      })}
    </div>
  )
}

export default ChatBox