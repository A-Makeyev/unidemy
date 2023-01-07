import { readdirSync } from 'fs'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'

require('dotenv').config()
const morgan = require('morgan')
const app = express()
const csrfProtection = csrf({ cookie: true })

// database
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('>>> Connected to MongoDB')
}).catch((error) => {
    console.log('>>> There was an error connecting to MongoDB:', error)
})

// {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// }

// apply middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

// routes
readdirSync('./routes').map((route) => {
    app.use('/api', require(`./routes/${route}`))
})

// CSRF Protection
app.use(csrfProtection)
app.get('/api/csrf-token', (request, response) => {
    response.json({ csrfToken: request.csrfToken() })
})

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`>>> Server is up and running on: http://localhost:${port}`)
})
