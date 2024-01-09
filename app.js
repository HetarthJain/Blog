require('dotenv').config()
const express = require('express')
const expresslayout = require('express-ejs-layouts')
const app = express()
const PORT = 5000 || process.env.PORT

const connect_db = require('./server/config/db.js')
connect_db()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// public folder contains static files
app.use(express.static('public'))

// templating engine
app.use(expresslayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main.js'))

app.listen(PORT, () => {
	console.log(`App Listening on PORT: ${PORT}`)
})