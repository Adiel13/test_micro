"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const code_1 = __importDefault(require("../controller/code"));
const code2_1 = __importDefault(require("../controller/code2"));
const router = (0, express_1.Router)();
exports.router = router;
const cd = new code_1.default();
const cd2 = new code2_1.default();
router.use('/micro', cd.router);
router.use('/micro2', cd2.router);
//# sourceMappingURL=routes.js.map