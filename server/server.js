import { readdirSync } from 'fs'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

require('dotenv').config()
const morgan = require('morgan')
const app = express()

// database
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('>>> Successfully connected to MongoDB')
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
app.use(morgan('dev'))

// routes
readdirSync('./routes').map((route) => {
    app.use('/api', require(`./routes/${route}`))
})

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`>>> Server is running on http://localhost:${port}`)
})
