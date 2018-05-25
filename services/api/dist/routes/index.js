"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const User_1 = require("../models/User");
const router = express.Router();
mongoose_1.connect('mongodb://localhost:27017/flow').catch(error => console.warn(error));
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = new User_1.default({
        email: 'test@mail.com'
    });
    user.save();
    res.send('test');
}));
exports.default = router;
//# sourceMappingURL=index.js.map