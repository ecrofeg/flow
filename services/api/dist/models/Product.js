"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Model_1 = require("./Model");
const schema = new mongoose_1.Schema(Object.assign({}, Model_1.modelSchema, { author: mongoose_1.Types.ObjectId }));
exports.default = mongoose_1.model('Product', schema);
//# sourceMappingURL=Product.js.map