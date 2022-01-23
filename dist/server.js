"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var book_1 = require("./models/book");
// import booksRoute from '../routes/books'
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
//Here we are configuring express to use body-parser as middle-ware.
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(body_parser_1["default"].json());
app.set('view engine', 'jade');
// Cors for cross origin allowance
app.use((0, cors_1["default"])());
// Initialize the main project folder
app.use(express_1["default"].static('website'));
var database_1 = __importDefault(require("./database"));
var books_1 = __importDefault(require("./routes/books"));
var bk = new book_1.BookSouq();
database_1["default"].connect().then(function (db) {
    return db.query('SELECT from books', function (err, res) {
        console.log(err, res.rows);
    });
});
// app.post('/', function (req: Request, res: Response) {
//     bk.create(req.body) 
//     res.json( {data:req.body} )
// })
app.get('/user', function (req, res) {
    // pass a local variable to the view
    return res.render('user', { name: 'Tobi' }, function (err, html) {
        // ...
    });
});
(0, books_1["default"])(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
