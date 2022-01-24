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
var book_1 = require("../models/book");
// import verifyAuthToken from '../middleware/verifyauthtoken';
var onen = new book_1.BookSouq();
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Books, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, onen.index()];
            case 1:
                Books = _a.sent();
                res.json(Books);
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
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Book;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, onen.show(req.params.id)];
            case 1:
                Book = _a.sent();
                res.json(Book);
                return [2 /*return*/];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Book0, newBook, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                Book0 = {
                    id: req.body.id,
                    title: req.body.title,
                    author: req.body.author,
                    totalPages: req.body.totalPages,
                    summary: req.body.summary,
                };
                console.log(req.body);
                return [4 /*yield*/, onen.create(Book0)];
            case 1:
                newBook = _a.sent();
                res.json(newBook);
                console.log(newBook);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(400);
                res.json(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Book0, newBook, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                Book0 = {
                    id: req.body.id,
                    title: req.body.title,
                    author: req.body.author,
                    totalPages: req.body.totalPages,
                    summary: req.body.summary,
                };
                console.log(req.body);
                return [4 /*yield*/, onen.updateBook(Book0)];
            case 1:
                newBook = _a.sent();
                res.json(newBook);
                console.log(newBook);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log(err_3);
                res.status(400);
                res.json(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var delBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deleted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, onen.delete(req.body.id)];
            case 1:
                deleted = _a.sent();
                res.json(deleted);
                return [2 /*return*/];
        }
    });
}); };
// const Book_routes = (app: express.Application) => {
//     app.get('/Books', index);
//     app.get('/Books/:id', show);
//     app.post('/Books', verifyAuthToken, create);
//     app.delete('/Books', verifyAuthToken, delBook);
// };
var Book_routes = function (app) {
    app.get('/Books', index);
    app.get('/Books/:id', show);
    app.post('/Books', create);
    app.patch('/Books', update);
    app.delete('/Books', delBook);
};
exports.default = Book_routes;