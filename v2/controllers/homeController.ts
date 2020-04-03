import { Controller, Get, Route, Request, Response, Post, RequestBody } from 'back-sj'
import { DashboardService } from '../services/dashboardService'
import { Dashboard } from '../model/dashboard'
import DbArray = require('dbarray')
import { UserService } from '../services/userService'
import { User } from '../model/user'

/**
 * Controller responsible to handle home requests
 */
@Controller
@Route('/')
export class HomeController {
    constructor(
        private dashboardService: DashboardService,
        private userService: UserService
    ) { }

    /**
     * Home route (default page of application)
     * @param res response to send back to client
     */
    @Get('/')
    home(res: Response) {
        let currentUser: User = this.userService.getUsers().first()
        let dashboards: DbArray<Dashboard> = this.dashboardService.getDashboards()
        res.render(
            'home',
            {
                dashboards: dashboards.distinct().orderBy('label', 'asc'),
                currentUser: currentUser
            }
        )
    }

    /**
     * Save Dashboard to database
     * @param req client request
     * @param res response to send back to client
     * @param user Dashboard data to save
     */
    @Post('/')
    saveDashboard(req: Request, res: Response, @RequestBody dashboard: Dashboard) {
        let result = this.dashboardService.saveDashboard(dashboard)
        res.end('Done')
    }
} 