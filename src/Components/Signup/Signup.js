import React, { useState } from 'react'
import { Card, CardBody, Button, Form, Input, FormGroup, InputGroup, FormText } from 'reactstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc"
import "./Signin.styles.scss"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { signup_user } from '../../Redux/ActionCreator';

const Signup = () => {

  const dispath = useDispatch();
  const alertMess = useSelector(msg => msg.signup)
  const [ visibilty, setVisibilty ] = useState(false)
  const defaultCred = {username: "", password: ""}
  const [ cred, setCred ] = useState(defaultCred)
  var type;
  if (visibilty === true) {
    type = 'text'
  } else {
    type = 'password'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cred);
    dispath(signup_user(cred))
    setCred(defaultCred)
  }
  if (alertMess.message !== null) {
    alert(alertMess.message)
  }
  return (
    <div className='signin_card_div d-flex justify-content-center align-items-center'>
      <div className='inner_card_div'>
        <Card className='sign_card'>
          <div className='card_header d-flex justify-content-center align-items-center'>
            <div>
              <img src="assets/images/login.jpeg" alt="connecting developers"  className='header_img'/>
              <h4>Sign Up</h4>
            </div>
          </div>
          <CardBody className='sign_card_body'>
            <Form onSubmit={handleSubmit}>
              <FormGroup className='sign_card_form_group'>
                <Input type="text" placeholder='username' className='input-input' value={cred.username}  onChange={(e) => {setCred(ans => ({...ans, username: e.target.value}))}} required/>
              </FormGroup>
              <FormGroup className='sign_card_form_group'>
                <InputGroup className='group_input d-flex align-items-center'>
                  <Input type={type} placeholder='password' className='input-input1' value={cred.password} onChange={(e) => {setCred(ans => ({...ans, password: e.target.value}))}} />
                    { visibilty ? <AiFillEyeInvisible className='close_eye' style={{color: 'grey'}} onClick={() => setVisibilty(false)}/> : <AiFillEye className="open_eye" style={{color: 'grey'}} onClick={() => setVisibilty(true)}/>}
                </InputGroup>
              </FormGroup>
              <h6 style={{color: "red", textAlign: "center"}}>{alertMess.errMess?.message}</h6>
              
              <div className=' d-flex justify-content-end'>
                <Button className='sign_btn'>Sign up</Button>
              </div>
            </Form>
            <h4 className='text-center'>Or</h4>
            <div className='d-flex justify-content-center'>
              <Button className='google_btn'>Sign up with google <span><FcGoogle /></span></Button>
            </div>
            <div className='mt-4'>
              <h4 className='text-center'>No Account? <Link to="/" className='link_tag'>Sign In</Link></h4>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Signup;