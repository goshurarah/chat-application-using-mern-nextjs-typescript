import React, { useState } from 'react'
import Image from 'next/image'
import pic from '../public/assets/signup.jpg'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react';

function Signup() {
  let router = useRouter()
  let [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const onSignup = async (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/signup', signupData)
      router.push('/')
    } catch (error) {
      console.log('ERROR === ', error)
    }

  }

  return (
    <>
      <div className={styles.mainContainer}>

        <div className={styles.leftSide}>
          <div className={styles.formBox}>
            <h2 className={styles.heading}>Welcome!</h2>

            <form action='/signup' method='post' className={styles.inputForm}>
              <input type="text" className={styles.inputField} placeholder="User Name" name="username" value={signupData.username} onChange={(e) => setSignupData({
                ...signupData,
                username: e.target.value
              })} />
              <input type="email" className={styles.inputField} placeholder="E-Mail" name="email" value={signupData.email} onChange={(e) => setSignupData({
                ...signupData,
                email: e.target.value
              })} />
              <input type="password" className={styles.inputField} placeholder="Passsword" name="password" value={signupData.password} onChange={(e) => setSignupData({
                ...signupData,
                password: e.target.value
              })} />
              <input type='submit' className={styles.submitBtn} value="Signup" onClick={onSignup} />
            </form>
            <h5 className={styles.loginHeading}>Already have an account? <span className={styles.loginLink}><Link href={'/'}>Login</Link></span></h5>
          </div>
        </div>

        <div className={styles.rightSide}>
          <Image src={pic} className={styles.signupImage} alt='signupImage' />
        </div>

      </div></>
  )
}

export default Signup