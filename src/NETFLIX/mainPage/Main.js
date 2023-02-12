import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import './Main.css'

function Main() {
  const navigate = useNavigate()
  return (<>
    <Navbar/>
    <div className="main">
    <div className='contents'>
   <h1 > Unlimited movies, TV <br /> shows and more.</h1>
   <h4 >Watch anywhere. Cancel anytime.</h4>
   <p>Ready to watch? Enter your email to create or restart your membership.</p>

   <button onClick={()=> navigate('/login')}> Get Started </button>
   </div>
   </div>
   </>

  )
}

export default Main