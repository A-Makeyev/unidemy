const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    // apply proxy in dev mode
    if (dev) {
        server.use('/api', createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true
        }))
    }

    server.all('*', (request, response) => {
        return handle(request, response)
    })

    server.listen(3000, (error) => {
        if (error) throw error
        console.log('>>> Server is up and running on: http://localhost:3000')
    })

}).catch((error) => {
    console.log('Error:', error)
})
