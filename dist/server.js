"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var userUrl_1 = __importDefault(require("./routes//api/userUrl"));
var productsUrl_1 = __importDefault(require("./routes/api/productsUrl"));
var orderUrl_1 = __importDefault(require("./routes/api/orderUrl"));
var app = (0, express_1.default)();
var address = "0.0.0.0:3000";
//Here we are configuring express to use body-parser as middle-ware.
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Cors for cross origin allowance
app.use((0, cors_1.default)());
// Initialize the main product folder
app.use(express_1.default.static('website'));
// let bk =new productSouq()
// client.connect().then(
//     (db)=>{
//         return db.query('SELECT from products ', (err, res) => {
//           console.log(err, res.rows) 
//         })
//     }
// )
// app.post('/', function (req: Request, res: Response) {
//     bk.create(req.body) 
//     res.json( {data:req.body} )
// })
(0, productsUrl_1.default)(app);
(0, userUrl_1.default)(app);
(0, orderUrl_1.default)(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
