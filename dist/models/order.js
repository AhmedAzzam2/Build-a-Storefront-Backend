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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSouq = void 0;
// conn database
var database_1 = __importDefault(require("../database"));
var id;
// make class models 
var OrderSouq = /** @class */ (function () {
    function OrderSouq() {
    }
    // function get all  order for user_id
    OrderSouq.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.connect()
                        // const sql = 'SELECT * FROM order_books'
                    ];
                    case 1:
                        conn = _a.sent();
                        sql = "SELECT * FROM books \n      INNER JOIN order_books ON books.id = order_books.books_id \n      INNER JOIN users ON users.id = order_books.user_id \n      order by order_books.books_id asc;";
                        return [4 /*yield*/, conn.query(sql)
                            // conn database release
                        ];
                    case 2:
                        result = _a.sent();
                        // conn database release
                        conn.release();
                        console.log(result.rows);
                        return [2 /*return*/, result.rows];
                }
            });
        });
    };
    // fun show book by id
    OrderSouq.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'SELECT * FROM order_books WHERE id=($1)';
                        return [4 /*yield*/, database_1.default.connect()
                            // query data info
                        ];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])
                            // conn database release
                        ];
                    case 2:
                        result = _a.sent();
                        // conn database release
                        conn.release();
                        // return show book
                        return [2 /*return*/, result.rows[0]];
                }
            });
        });
    };
    // make create fun INSERT INTO order_books
    OrderSouq.prototype.create = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'INSERT INTO order_books (quantity, user_id, books_id,status ) VALUES($1, $2, $3, $4) RETURNING *';
                        return [4 /*yield*/, database_1.default.connect()
                            // query data
                        ];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn
                                .query(sql, [a.quantity, a.user_id, a.books_id, a.status])];
                    case 2:
                        result = _a.sent();
                        order = result.rows[0];
                        // conn database release
                        conn.release();
                        // return data order
                        return [2 /*return*/, order];
                }
            });
        });
    };
    OrderSouq.prototype.updateOrder = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "UPDATE order_books \n                  SET quantity=$1, user_id=$2, books_id=$3,status=$4\n                  WHERE id=$5 \n                  RETURNING *";
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn
                                .query(sql, [a.quantity, a.user_id, a.books_id, a.status, a.id])];
                    case 2:
                        result = _a.sent();
                        order = result.rows[0];
                        conn.release();
                        return [2 /*return*/, order];
                }
            });
        });
    };
    OrderSouq.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'DELETE FROM order_books WHERE id=($1)';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        order = result.rows[0];
                        conn.release();
                        return [2 /*return*/, order];
                }
            });
        });
    };
    return OrderSouq;
}());
exports.OrderSouq = OrderSouq;
