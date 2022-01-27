"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
// get config vars
dotenv.config();
var token_secret = process.env.TOKEN_SECRET;
// created function for check token access 
var getUser = function (req, res) {
    var token = req.headers['authorization'];
    var tk = jwt.verify(token, token_secret);
    console.log(tk.user.id);
    console.log('zzzzzzzzz');
};
exports.getUser = getUser;
// created function for check token access 
var authenticateToken = function (req, res, next) {
    // get token from hader
    var token = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1]
    // console.log(token);
    var tk = jwt.verify(token, token_secret);
    console.log(tk);
    console.log('zzzzzzzzz');
    next();
};
exports.default = authenticateToken;
