import { Back } from 'back-sj'

import http = require('http')
import path = require('path')
import bodyParser = require('body-parser')
import mustache = require('mustache-express')

/**
 * Import controllers so they can be analysed
 */
import './controllers/homeController'
import './controllers/userController'

/**
 * Express Configuration
 */
let express = Back.express
let app = express()

// Back needed
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Mustache
app.engine('html', mustache())
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'view'))

/**
 * prepare express routes
 */
Back.prepare(app)

let port = process.env.PORT || '3000'
app.set('port', port)
let server = http.createServer(app)
server.listen(port)