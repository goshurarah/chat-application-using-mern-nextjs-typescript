require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        },
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    loginStatus: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

//generate token
userSchema.methods.generateAuthToken = (async function () {
    try {
        let token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY)
        this.loginStatus = true;
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token
    } catch (error) {
        console.log(error);
    }
})

//hash password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})
let signupUsers = mongoose.model('registers', userSchema)
module.exports = signupUsers
