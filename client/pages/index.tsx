import React, { useState } from 'react'
import Image from 'next/image'
import pic from '../public/assets/login.jpg'
import styles from '@/styles/Login.module.css'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'
import { MouseEvent } from 'react';

function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:4000/login', { email, password })
      router.push('/home')
    } catch (error) {
      console.log('ERROR === ', error)
    }

  }
  return (
    <>
      <div className={styles.mainContainer}>

        <div className={styles.leftSide}>
          <Image src={pic} className={styles.loginImage} alt='loginImage' />
        </div>

        <div className={styles.rightSide}>
          <div className={styles.formBox}>
            <h2 className={styles.heading}>Welcome!</h2>

            <form action='/login' method='post' className={styles.inputForm}>
              <input type="email" className={styles.inputField} placeholder="E-Mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" className={styles.inputField} placeholder="Passsword" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" className={styles.submitBtn} value="Login" onClick={onLogin} />
            </form>
            <h5 className={styles.signupHeading}>Not a member? <span className={styles.signupLink}><Link href={'/signup'}>Signup</Link></span></h5>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login