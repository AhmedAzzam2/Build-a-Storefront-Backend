"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../order");
var auth_1 = __importDefault(require("../auth"));
var order_products_routes = function (Router) {
    Router.get('/orders', auth_1.default, order_1.index);
    Router.get('/orders/:id', auth_1.default, order_1.show);
    Router.post('/orders', auth_1.default, order_1.create);
    Router.patch('/orders', auth_1.default, order_1.update);
    Router.delete('/orders', auth_1.default, order_1.delorder_products);
};
exports.default = order_products_routes;
