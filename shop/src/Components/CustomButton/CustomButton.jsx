import React from 'react'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`btn btn-block ${isGoogleSignIn ? 'btn-secondary' : 'btn-primary'}`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
