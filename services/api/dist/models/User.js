"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    email: String,
    firstName: String,
    lastName: String
});
exports.default = mongoose_1.model('User', schema);
//# sourceMappingURL=User.js.map