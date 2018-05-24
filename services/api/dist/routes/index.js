"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send('test');
});
exports.default = router;
//# sourceMappingURL=index.js.map