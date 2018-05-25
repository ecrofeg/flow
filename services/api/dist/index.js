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
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const passport_local_1 = require("passport-local");
const passport_jwt_1 = require("passport-jwt");
const routes_1 = require("./routes");
const User_1 = require("./models/User");
dotenv_1.config();
mongoose_1.connect('mongodb://localhost:27017/flow').catch(error => console.warn(error));
const app = express();
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
passport.use(new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
}, (email, password, done) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user || !user.checkPassword(password)) {
            return done(null, null, { message: 'Нет такого пользователя или пароль неверен.' });
        }
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
})));
passport.use(new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: routes_1.jwtSecret
}, ({ id }, done) => __awaiter(this, void 0, void 0, function* () {
    console.log(id);
    try {
        const user = yield User_1.default.findById(id);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, null);
        }
    }
    catch (error) {
        return done(error);
    }
})));
app.use('/', routes_1.default);
app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'));
//# sourceMappingURL=index.js.map