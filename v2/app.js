"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var back_sj_1 = require("back-sj");
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var mustache = require("mustache-express");
/**
 * Import controllers so they can be analysed
 */
require("./controllers/homeController");
require("./controllers/userController");
/**
 * Express Configuration
 */
var express = back_sj_1.Back.express;
var app = express();
// Back needed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Mustache
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'view'));
/**
 * prepare express routes
 */
back_sj_1.Back.prepare(app);
var port = process.env.PORT || '3000';
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
