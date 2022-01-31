"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("../products");
var auth_1 = __importDefault(require("../auth"));
var product_routes = function (Router) {
    Router.get('/products ', auth_1.default, products_1.index);
    Router.get('/products /:id', auth_1.default, products_1.show);
    Router.post('/products ', auth_1.default, products_1.create);
    Router.patch('/products ', auth_1.default, products_1.update);
    Router.delete('/products ', auth_1.default, products_1.delproduct);
};
exports.default = product_routes;
