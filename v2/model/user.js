"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(data) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
        }
    }
    return User;
}());
exports.User = User;
