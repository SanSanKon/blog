import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className='auth'>
      <h1>Register</h1>
      <form className='registerForm'>
        <input required type='text' placeholder='username' />
        <input required type='email' placeholder='email' />
        <input required type='password' placeholder='password' />
        <button>Register</button>
        <p>Error!</p>
        <span>Already have an account?<Link to="/login">Login</Link></span>
      </form>
    </div>
    </div>
  )
}

export default Register
