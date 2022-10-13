import { register, login } from '../controllers/auth'
import express from 'express'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

module.exports = router