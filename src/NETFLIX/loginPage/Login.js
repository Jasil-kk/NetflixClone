import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import { MdPhoneIphone } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordFill } from 'react-icons/ri';

function Login() {
    const navigate = useNavigate()
  return (<>
  <Navbar/>
    <div className="main">
    <div className='login-main'>
    <form  action="">
        <label htmlFor="text"><BsFillPersonFill/> First Name</label>
        
    <input type="text"/>
    <label htmlFor="text"><BsFillPersonFill/> Last Name</label>
    <input type="text" />
    <label htmlFor=""><MdPhoneIphone/> Phone</label>
    <input type="number" />
    <label htmlFor=""><TfiEmail/> Email</label>
    <input type="email" />
    <label htmlFor=""><RiLockPasswordFill/>Password</label>
    <input type="password"/>
    <button onClick={()=> navigate('/banner')}>Login</button>
    </form>
</div>
</div>
</>
  )
}

export default Login