import React, { useState } from 'react'
import { Card, CardBody, Button, Form, Input, FormGroup, InputGroup } from 'reactstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc"
import "./Signin.styles.scss"
import { Link } from 'react-router-dom';

const Signup = () => {

  const [ visibilty, setVisibilty ] = useState(false)
  var type;
  if (visibilty === true) {
    type = 'text'
  } else {
    type = 'password'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()
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
                <Input type="text" placeholder='username' className='input-input' required/>
              </FormGroup>
              <FormGroup className='sign_card_form_group'>
                <InputGroup className='group_input d-flex align-items-center'>
                  <Input type={type} placeholder='password' className='input-input1'/>
                    { visibilty ? <AiFillEyeInvisible className='close_eye' style={{color: 'grey'}} onClick={() => setVisibilty(false)}/> : <AiFillEye className="open_eye" style={{color: 'grey'}} onClick={() => setVisibilty(true)}/>}
                </InputGroup>
              </FormGroup>
              <div className=' d-flex justify-content-end'>
                <Button className='sign_btn'>SignIn</Button>
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