const jwt = require('jsonwebtoken')
const signup_users = require('../model/signup')


const auth = async (req, resp, next) => {
    try {
        let token = req.cookies.jwt;
        let userVerify = await jwt.verify(token, process.env.SECRET_KEY)

        let user = await signup_users.findOne({ _id: userVerify._id})
        req.token = token
        req.user = user

        next()
    } catch (error) {
        resp.status(401).send('PLEASE! FIRST LOGIN')
    }
}
module.exports = auth;