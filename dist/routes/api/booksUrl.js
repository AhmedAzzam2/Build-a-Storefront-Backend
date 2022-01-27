"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var books_1 = require("../books");
var auth_1 = __importDefault(require("../auth"));
var Book_routes = function (Router) {
    Router.get('/Books', auth_1.default, books_1.index);
    Router.get('/Books/:id', auth_1.default, books_1.show);
    Router.post('/Books', auth_1.default, books_1.create);
    Router.patch('/Books', auth_1.default, books_1.update);
    Router.delete('/Books', auth_1.default, books_1.delBook);
};
exports.default = Book_routes;
