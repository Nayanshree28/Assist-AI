import React from 'react'
import {SignIn} from '@clerk/clerk-react'
import '../SignInPage/signinPage.css'

const SignInPage = () => {
  return (
    <div className='signinPage'>
      <SignIn path="/sign-in" signUpUrl='/sign-up' forceRedirectUrl="/dashboard"/>
    </div>
  )
}

export default SignInPage
