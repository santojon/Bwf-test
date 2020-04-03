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
Object.defineProperty(exports, "__esModule", { value: true });
var back_sj_1 = require("back-sj");
var dashboard_1 = require("../model/dashboard");
var databaseService_1 = require("./databaseService");
/**
 * Service responsible to manage Dashboards from database
 */
var DashboardService = /** @class */ (function () {
    function DashboardService(databaseService) {
        this.databaseService = databaseService;
    }
    /**
     * Save a Dashboard to database
     * @param dashboard the Dashboard to save
     */
    DashboardService.prototype.saveDashboard = function (dashboard) {
        var dash = new dashboard_1.Dashboard({
            id: dashboard.id,
            label: dashboard.label,
            price: dashboard.price,
            owner: dashboard.owner
        });
        return dash.save();
    };
    /**
     * Get all Dashboards from database
     */
    DashboardService.prototype.getDashboards = function () {
        return dashboard_1.Dashboard.findAll();
    };
    DashboardService = __decorate([
        back_sj_1.Service,
        __metadata("design:paramtypes", [databaseService_1.DataBaseService])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
