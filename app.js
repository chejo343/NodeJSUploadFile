const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const upload = require('./routes/upload')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'uploads')))

app.use(upload)

const server = app.listen(port, () => {
    console.log('Running on port:', port,`
.##..##..#####...##.......####....####...#####..
.##..##..##..##..##......##..##..##..##..##..##.
.##..##..#####...##......##..##..######..##..##.
.##..##..##......##......##..##..##..##..##..##.
..####...##......######...####...##..##..#####..
    `)
})