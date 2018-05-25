"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto = require("crypto");
const schema = new mongoose_1.Schema({
    email: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    salt: String
}, {
    timestamps: true
});
schema
    .virtual('password')
    .set(function (password) {
    this._plainPassword = password;
    if (password) {
        this.salt = crypto.randomBytes(128).toString('base64');
        this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
    }
    else {
        this.salt = undefined;
        this.passwordHash = undefined;
    }
})
    .get(function () {
    return this._plainPassword;
});
schema.methods.checkPassword = function (password) {
    console.log(password);
    console.log(this.passwordHash);
    return password && this.passwordHash ? crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') == this.passwordHash : false;
};
exports.default = mongoose_1.model('User', schema);
//# sourceMappingURL=User.js.map