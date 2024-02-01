import React from 'react'
// import bgIMG from '../Assets/Ats.jpg';
import { FaRegUser, FaLock } from "react-icons/fa";

function RegistrationForm()  {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Register</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaRegUser />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='password' required />
          <FaLock />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='confirm password' required />
          <FaLock />
        </div>

        <div className='remember-forget'>
          <label><input type='checkbox' />Remember me</label>
          <a href='#'>Forgot password</a>
        </div>
<button type='submit'>submit</button>
{/* <div className='img'>
    <img src={bgIMG} alt=''/>
</div> */}
<div className='register-link'>
  <p>Do you have an account? <a href='#'>Login</a></p>
</div>

      </form>
    </div>
  )
}

export default RegistrationForm;
