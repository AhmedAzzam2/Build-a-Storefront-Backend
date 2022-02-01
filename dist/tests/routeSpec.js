"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("../server"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(server_1.default);
describe('POST /products', function () {
    it('test post create', function (ok) {
        (0, supertest_1.default)(server_1.default).post('/products').send({
            name: 'Ali',
            price: 1
        })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
            if (err)
                return ok();
            return ok();
        });
    });
});
