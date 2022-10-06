import fs from 'fs'
import express from 'express'
import cors from 'cors'

require('dotenv').config()
const morgan = require('morgan')
const app = express()

// apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
fs.readdirSync('./routes').map((route) => 
    app.use('/api', require(`./routes/${route}`))
)

// port
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`>>> Server is running on http://localhost:${port}`))
