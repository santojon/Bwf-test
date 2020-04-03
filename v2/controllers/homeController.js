"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var back_sj_1 = require("back-sj");
var dashboardService_1 = require("../services/dashboardService");
var dashboard_1 = require("../model/dashboard");
var userService_1 = require("../services/userService");
/**
 * Controller responsible to handle home requests
 */
var HomeController = /** @class */ (function () {
    function HomeController(dashboardService, userService) {
        this.dashboardService = dashboardService;
        this.userService = userService;
    }
    /**
     * Home route (default page of application)
     * @param res response to send back to client
     */
    HomeController.prototype.home = function (res) {
        var currentUser = this.userService.getUsers().first();
        var dashboards = this.dashboardService.getDashboards();
        res.render('home', {
            dashboards: dashboards.distinct().orderBy('label', 'asc'),
            currentUser: currentUser
        });
    };
    /**
     * Save Dashboard to database
     * @param req client request
     * @param res response to send back to client
     * @param user Dashboard data to save
     */
    HomeController.prototype.saveDashboard = function (req, res, dashboard) {
        var result = this.dashboardService.saveDashboard(dashboard);
        res.end('Done');
    };
    __decorate([
        back_sj_1.Get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [back_sj_1.Response]),
        __metadata("design:returntype", void 0)
    ], HomeController.prototype, "home", null);
    __decorate([
        back_sj_1.Post('/'),
        __param(2, back_sj_1.RequestBody),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [back_sj_1.Request, back_sj_1.Response, dashboard_1.Dashboard]),
        __metadata("design:returntype", void 0)
    ], HomeController.prototype, "saveDashboard", null);
    HomeController = __decorate([
        back_sj_1.Controller,
        back_sj_1.Route('/'),
        __metadata("design:paramtypes", [dashboardService_1.DashboardService,
            userService_1.UserService])
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;
