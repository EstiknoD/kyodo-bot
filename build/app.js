"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
exports.client = new discord_js_1.Client();
exports.client.on('ready', () => {
    var _a, _b;
    console.log(`Bot is ready as ${(_a = exports.client.user) === null || _a === void 0 ? void 0 : _a.tag}`);
    (_b = exports.client.user) === null || _b === void 0 ? void 0 : _b.setStatus('online');
});
exports.client.login('ODA1Mzg2ODk3MDY4MjYxMzgx.YBaI_w.I8k7XY6jxqXmjZQcUT9iMQF7opE');
