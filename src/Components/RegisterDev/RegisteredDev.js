import React from 'react'
import { Media } from "reactstrap";
import "./RegisteredDev.styles.scss";
import Loading from '../loading';
import { Link } from 'react-router-dom';


const RegisteredDev = (props) => {
  if (props.users.isLoading === true) {
    return (
      <Loading />
    )
  } else if ( props.users.errMess === "No registered user") {
    return (
      <div className='no_registered_users'>
        <h5>Kindly be the first to register, and also, invite your colleagues</h5>
      </div>
    )
  } else if (props.users.users.length !== 0) {
    return (
      <div className='register_dev'>
        <div className='registered_inner_div'>
          {props.users.users.map((data) => {
            return (
              <Link to={`/Home/:${data._id}`} key={data._id}>
              <Media className='d-flex align-items-center justify-content-center reg_card'>
                <Media left center>
                  <Media object src="assets/images/login.jpeg" className="avatar" alt="user dp"></Media>
                </Media>
                <Media body className='reg_media'>
                  <h4>{data.username}</h4>
                  <h6 className='last_message'>Your last message</h6>
                </Media>
              </Media></Link>
            )
          })
          }
        </div>
        <hr className='' style={{color: "white"}}/>
      </div>
    )
  }
}

export default RegisteredDev;