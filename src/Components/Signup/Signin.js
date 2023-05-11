import React, { useState } from 'react'
import { Card, CardBody, Button, Form, Input, FormGroup, InputGroup } from 'reactstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa"
import "./Signin.styles.scss"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { login_user, signin_with_google, signin_with_linkedin } from '../../Redux/ActionCreator';


const SignIn = () => {

  const dispatch = useDispatch();
  const [ visibilty, setVisibilty ] = useState(false);
  const [ cred, setCred ] = useState({username: "", password: ""})
  var type;
  if (visibilty === true) {
    type = 'text'
  } else {
    type = 'password'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cred);
    dispatch(login_user(cred))
  }
  return (
    <div className='signin_card_div d-flex justify-content-center align-items-center'>
      <div className='inner_card_div'>
        <Card className='sign_card'>
          <div className='card_header d-flex justify-content-center align-items-center'>
            <div>
              <img src="assets/images/login.jpeg" alt="connecting developers"  className='header_img'/>
              <h4>Login</h4>
            </div>
          </div>
          <CardBody className='sign_card_body'>
            <Form onSubmit={handleSubmit}>
              <FormGroup className='sign_card_form_group'>
                <Input type="text" placeholder='username' className='input-input' onChange={(e) => {setCred(ans => ({...ans, username: e.target.value}))}} required/>
              </FormGroup>
              <FormGroup className='sign_card_form_group'>
                <InputGroup className='group_input d-flex align-items-center'>
                  <Input type={type} placeholder='password' className='input-input1' onChange={(e) => {setCred(ans => ({...ans, password: e.target.value}))}} />
                    { visibilty ? <AiFillEyeInvisible className='close_eye' style={{color: 'grey'}} onClick={() => setVisibilty(false)}/> : <AiFillEye className="open_eye" style={{color: 'grey'}} onClick={() => setVisibilty(true)}/>}
                </InputGroup>
              </FormGroup>
              <div className=' d-flex justify-content-end'>
                <Button className='sign_btn'>SignIn</Button>
              </div>
            </Form>
            <h4 className='text-center'>Or</h4>
            <div className='d-flex justify-content-center'>
              <Button className='google_btn' onClick={() => { dispatch(signin_with_google())}}>Sign in with google <span><FcGoogle /></span></Button>
              <Button className='linkedin_btn' onClick={() => { dispatch(signin_with_linkedin())}}>Sign in with linkedIn <span><FaLinkedin style={{color: "blue"}} /></span></Button>
            </div>
            <div className='mt-4'>
              <h4 className='text-center'>No Account? <Link to="/signup" className='link_tag'>Sign Up</Link></h4>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default SignIn;