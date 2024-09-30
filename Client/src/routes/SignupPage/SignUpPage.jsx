import React from 'react'
import {SignUp} from  '@clerk/clerk-react'
import '../SignupPage/SignUpPage.css'

const SignUpPage = () => {
  return (
    <div className='SignUpPage'>
       <SignUp path="/sign-up" signInUrl='/sign-in'/>
    </div>
  )
}

export default SignUpPage
