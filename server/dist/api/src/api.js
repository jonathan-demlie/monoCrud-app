"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const api = axios_1.default.create({
    baseURL: 'http://localhost:3000/api/v1',
});
exports.default = api;
//# sourceMappingURL=api.js.map