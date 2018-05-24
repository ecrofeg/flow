"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
dotenv_1.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes_1.default);
app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'));
//# sourceMappingURL=index.js.map