"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreate = exports.delorder_products = exports.update = exports.create = exports.show = exports.index = void 0;
var dotenv = require('dotenv');
// get config vars
dotenv.config();
var jwt = require('jsonwebtoken');
var order_1 = require("../models/order");
var bcrypt = require('bcrypt');
var onen = new order_1.order_productsSouq();
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order_productss, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, onen.index()];
            case 1:
                order_productss = _a.sent();
                res.json(order_productss);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.index = index;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send(400);
        return [2 /*return*/];
    });
}); };
exports.show = show;
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, tk, order_products0, neworder_products, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.headers['authorization'];
                tk = jwt.verify(token, process.env.TOKEN_SECRET);
                order_products0 = {
                    id: req.body.id,
                    quantity: req.body.quantity,
                    order_id: tk.user.id,
                    product_id: req.body.product_id,
                };
                console.log(req.body);
                return [4 /*yield*/, onen.create(order_products0)];
            case 1:
                neworder_products = _a.sent();
                res.json(neworder_products);
                console.log(neworder_products);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.send(400);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.create = create;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order_products0, neworder_products, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                order_products0 = {
                    id: req.body.id,
                    quantity: req.body.quantity,
                    order_id: req.body.order_id,
                    product_id: req.body.product_id,
                };
                console.log(req.body);
                return [4 /*yield*/, onen.updateorder_products(order_products0)];
            case 1:
                neworder_products = _a.sent();
                res.json(neworder_products);
                console.log(neworder_products);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.send(400);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.update = update;
var delorder_products = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deleted, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, onen.delete(req.body.id)];
            case 1:
                deleted = _a.sent();
                res.json(deleted);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.send(400);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.delorder_products = delorder_products;
var OrderCreate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, tk, order_products, neworder_products, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.headers['authorization'];
                tk = jwt.verify(token, process.env.TOKEN_SECRET);
                order_products = {
                    id: req.body.id,
                    status: req.body.status,
                    user_id: tk.user.id,
                };
                console.log(req.body);
                return [4 /*yield*/, onen.ordercreate(order_products)];
            case 1:
                neworder_products = _a.sent();
                res.json(neworder_products);
                console.log(neworder_products);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.send(400);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.OrderCreate = OrderCreate;
