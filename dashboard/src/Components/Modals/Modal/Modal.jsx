import React from 'react'

const Modal = ({ children, closeModal }) => (
  <div className="">
    <div className="">
      <a className="" onClick={closeModal}>
        <div className="icon"><i className="bi bi-x"></i></div>
      </a>
      {children}
    </div>
  </div>
)

export default Modal
