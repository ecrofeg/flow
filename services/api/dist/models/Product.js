"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./Model");
class Product extends Model_1.Model {
    fill(schema) {
        this.name = schema.name;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map