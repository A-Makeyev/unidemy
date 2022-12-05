import { register, login, logout } from '../controllers/auth'
import express from 'express'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router