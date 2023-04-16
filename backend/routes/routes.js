const express = require('express')
const bcrypt = require('bcryptjs')
const signupUsers = require('../model/signup')
const auth = require('../middleware/auth')
let router = express.Router()

//post signup data
router.post('/signup', async (req, res) => {
    try {
        let data = new signupUsers(req.body)
        let resData = await data.save()
        res.status(201).json(resData)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

//check login authentication
router.post('/login', async (req, res) => {
    try {
        let email = req.body.email
        let password = req.body.password
        let userEmail = await signupUsers.findOne({ email: email })

        //match hash password
        let isMatch = await bcrypt.compare(password, userEmail.password)

        if (isMatch) {
            //token
            let token = await userEmail.generateAuthToken()

            //cookies
            res.cookie('jwt', token, { expires: new Date(Date.now() + 600000), httpOnly: true })
            res.status(201).json()
        } else {
            res.send('Error')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//logout
router.delete('/logout', async (req, res) => {
    try {
        let userData = await signupUsers.findOne({ loginStatus: true })
        let loginData = userData.loginStatus;
        if (loginData) {
            await signupUsers.updateOne({ loginStatus: true }, { $set: { tokens: [], loginStatus: false } })
        }
        res.status(200).json('Deleted')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router