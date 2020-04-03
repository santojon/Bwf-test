"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard = /** @class */ (function () {
    function Dashboard(data) {
        if (data) {
            this.id = data.id;
            this.label = data.label;
            this.price = data.price;
            this.owner = data.owner;
        }
    }
    return Dashboard;
}());
exports.Dashboard = Dashboard;
