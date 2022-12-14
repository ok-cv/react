import React, { useState } from 'react'

import { auth, signInWithGoogle } from 'Firebase/firebase.utils'
import { CustomButton, PasswordInput, TextInput } from 'Components'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(credentials.email, credentials.password)

      setCredentials({ email: '', password: '' })
    } catch (error) {
      console.log('error signing in', error.message)
    }
  }

  const handleChange = (name, value) => setCredentials({ ...credentials, [name]: value })

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-4">
        <div className="col-12">
          <div className="display-6">Login</div>
        </div>
        <div className="col-12">
          <TextInput
            value={credentials.email}
            onChange={(name, value) => handleChange(name, value)}
            label="E-Mail"
            name="email"
          />
        </div>
        <div className="col-12">
          <PasswordInput
            value={credentials.password}
            onChange={(name, value) => handleChange(name, value)}
            label="Password"
            name="password"
          />
        </div>
        <div className="col-12">
          <CustomButton type="submit">Login with E-Mail</CustomButton>
        </div>
        <div className="col-12">
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Login with Google</CustomButton>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
