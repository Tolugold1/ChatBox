import React, { useState } from 'react'
import "./msgForm.styles.scss"
import { FormGroup, InputGroup, Input, Form } from 'reactstrap';
import { MdSend } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { mymsgBasedOnVisitorsId } from "../../Redux/ActionCreator";
import { useParams } from 'react-router-dom';

function MsgForm() {
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params);
  const defaultMessage = "";
  const [ message, setMessage ] = useState(defaultMessage);

  const p = params.userId?.slice(1, params.userId.length);
  console.log(p)
  const cred = {
    visitorID: p,
    mymsg: message
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cred", cred)
    mymsgBasedOnVisitorsId(cred);
    setMessage(defaultMessage);
  }
  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  }
  console.log("message", message);
  return (
    <div className='msgForm'>
      <Form className='msgform' onSubmit={handleSubmit}>
        <FormGroup className='group'>
          <InputGroup className='msg_input-input'>
            <Input type='text' placeholder='Write a message' name='message' value={ message } onChange={handleChange} className='input-input'/>
            <button type='submit' style={{padding: '5px', backgroundColor: "#FEF8F8", borderRadius: "10px"}}><MdSend className='send_icon' /></button>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  )
}

export default MsgForm