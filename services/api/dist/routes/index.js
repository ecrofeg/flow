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
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User_1 = require("../models/User");
const router = express.Router();
exports.jwtSecret = 'fvasdg124sadg#1234';
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send('test');
}));
router.post('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.send(yield User_1.default.create(req.body));
    }
    catch (error) {
        res.status(400);
        res.send(error);
    }
}));
router.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
    yield passport.authenticate('local', (err, user) => {
        if (!user) {
            res.send('Failed!');
        }
        else {
            const payload = {
                id: user.id,
                firstName: user.firstName,
                email: user.email
            };
            const token = jwt.sign(payload, exports.jwtSecret);
            res.send({
                user: user.firstName,
                token: token
            });
        }
    })(req, res);
}));
router.get('/custom', (req, res) => __awaiter(this, void 0, void 0, function* () {
    yield passport.authenticate('jwt', function (err, user) {
        if (user) {
            res.send('hello ' + user.firstName);
        }
        else {
            res.send('No such user');
            console.log('err', err);
        }
    })(req, res);
}));
exports.default = router;
//# sourceMappingURL=index.js.map