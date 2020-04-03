// Get the database lib
import Bhdr = require('bhdr2')

// Get models
import { Dashboard } from './model/dashboard'
import { User } from './model/user'

// Create the 'Database'
const database = new Bhdr(this)

// Map models
database.map(User, Dashboard)

// Exports the database
module.exports = database