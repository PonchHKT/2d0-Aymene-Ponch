import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { isEmpty } from 'lodash'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import passport from 'passport'
// import randomstring from 'randomstring'
// import sendMail from '../services/sendMail'
import { hashPassword } from '../utils/password'

const api = Router()

api.post('/signup', async (req, res) => {

  const acceptedFields = ['firstname', 'lastname', 'email', 'password', 'passwordConfirmation', 'birthdate', 'gender']

  const missingValues = acceptedFields.filter(field => !req.body[field])
  if (!isEmpty(missingValues)) {
    return res.status(400).json({
      error: `Values ${missingValues.join(', ')} are missing`
    })
  }

  const { firstname, lastname, email, password, passwordConfirmation, gender, birthdate } = req.body

  if (password !== passwordConfirmation) {
    return res.status(400).json({
      error: "Password and confirmation doesn't match"
    })
  }

  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.create({
      data: {
        birthdate,
        gender,
        firstname,
        lastname,
        email,
        encryptedPassword: hashPassword(password),
      }
    })

    const payload = { email }
    dotenv.config()
    const token = jwt.sign(payload, process.env.JWT_ENCRYPTION)

    res.json({ data: { user, token } })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

api.post('/signin', (req, res) => {
  const login = passport.authenticate('local', { session: false }, (err, user) => {
    console.log("🚀 ~ file: auth.js ~ line 55 ~ login ~ err", err)
    if (err) return res.status(400).json({ error: err })

    const { email } = user
    const payload = { email }
    dotenv.config()
    const token = jwt.sign(payload, process.env.JWT_ENCRYPTION)
    res.json({ data: { user, token } })
  })

  login(req, res)
})

export default api