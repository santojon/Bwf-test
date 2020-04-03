"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get the database lib
var Bhdr = require("bhdr2");
// Get models
var dashboard_1 = require("./model/dashboard");
var user_1 = require("./model/user");
// Create the 'Database'
var database = new Bhdr(this);
// Map models
database.map(user_1.User, dashboard_1.Dashboard);
// Exports the database
module.exports = database;
