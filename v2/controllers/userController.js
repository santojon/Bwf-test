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
var userService_1 = require("../services/userService");
var user_1 = require("../model/user");
/**
 * Controller responsible to handle User requests
 */
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    /**
     * User route
     * @param res response to send back to client
     */
    UserController.prototype.userHome = function (res) {
        var users = this.userService.getUsers();
        res.send(users);
    };
    /**
     * Save User to database
     * @param req client request
     * @param res response to send back to client
     * @param user User data to save
     */
    UserController.prototype.saveUser = function (req, res, user) {
        var result = this.userService.saveUser(user);
        res.end('Done');
    };
    __decorate([
        back_sj_1.Get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [back_sj_1.Response]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "userHome", null);
    __decorate([
        back_sj_1.Post('/'),
        __param(2, back_sj_1.RequestBody),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [back_sj_1.Request, back_sj_1.Response, user_1.User]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "saveUser", null);
    UserController = __decorate([
        back_sj_1.Controller,
        back_sj_1.Route('/user'),
        __metadata("design:paramtypes", [userService_1.UserService])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
