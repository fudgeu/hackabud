import { useAuth0 } from '@auth0/auth0-react'
import styles from './styles.module.css'
import { useEffect } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginButton from '../LoginButton/LoginButton.tsx'
import LogoutButton from '../LogoutButton/LogoutButton.tsx'

export default function Login() {
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Authenticated!')
    } else {
      console.log('Not Authenticated!')
    }
  }, [isAuthenticated])

  return (
    <h1 className={styles.authen}>
      Authenticating...
    </h1>
  )
};
