import { register } from '../controllers/auth'
import express from 'express'

const router = express.Router()

router.get('/register', register)

module.exports = router
