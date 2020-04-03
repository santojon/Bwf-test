import { Service } from 'back-sj'
import { User } from '../model/user'
import DbArray = require('dbarray')
import { DataBaseService } from './databaseService'

/**
 * Service responsible to manage Users from database
 */
@Service
export class UserService {
    constructor(private databaseService: DataBaseService) { }

    /**
     * Save a User to database
     * @param user the Dashboard to save
     */
    saveUser(user: User): User | null {
        let u = new User({
            id: user.id,
            name: user.name
        })
        return (u as any).save() as User
    }

    /**
     * Get all Users from database
     */
    getUsers(): DbArray<User> {
        return (User as any).findAll() as DbArray
    }
}