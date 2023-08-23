"use client";

import React from 'react'
import Modal from './Modal';

const AuthModal = () => {
  return (
    <Modal 
        title='Welcome back'
        description='Login to your account'
        isOpen
        onChange={() => {}}
    >
        auth modal children
    </Modal>
  )
}

export default AuthModal