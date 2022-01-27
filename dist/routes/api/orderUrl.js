"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../order");
var auth_1 = __importDefault(require("../auth"));
var Order_routes = function (Router) {
    Router.get('/Orders', auth_1.default, order_1.index);
    Router.get('/Orders/:id', auth_1.default, order_1.show);
    Router.post('/Orders', auth_1.default, order_1.create);
    Router.patch('/Orders', auth_1.default, order_1.update);
    Router.delete('/Orders', auth_1.default, order_1.delOrder);
};
exports.default = Order_routes;
