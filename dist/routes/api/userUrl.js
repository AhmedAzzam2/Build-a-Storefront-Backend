"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../User");
var auth_1 = __importDefault(require("../auth"));
var User_routes = function (app) {
    app.get('/users', auth_1.default, User_1.index);
    app.get('/users/:id', auth_1.default, User_1.show);
    app.post('/users', User_1.create);
    app.patch('/users', auth_1.default, User_1.update);
    app.delete('/users', auth_1.default, User_1.delUser);
};
exports.default = User_routes;
