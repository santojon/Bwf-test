import { Controller, Get, Route, Request, Response, Post, RequestBody } from 'back-sj'
import DbArray = require('dbarray')
import { UserService } from '../services/userService'
import { User } from '../model/user'

/**
 * Controller responsible to handle User requests
 */
@Controller
@Route('/user')
export class UserController {
    constructor(private userService: UserService) { }

    /**
     * User route
     * @param res response to send back to client
     */
    @Get('/')
    userHome(res: Response) {
        let users: DbArray<User> = this.userService.getUsers()
        res.send(users)
    }

    /**
     * Save User to database
     * @param req client request
     * @param res response to send back to client
     * @param user User data to save
     */
    @Post('/')
    saveUser(req: Request, res: Response, @RequestBody user: User) {
        let result = this.userService.saveUser(user)
        res.end('Done')
    }
} 