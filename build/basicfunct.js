"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
function clear(message) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!clear'))
            return;
        if (message.channel.type == "dm")
            return;
        if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission('MANAGE_MESSAGES')))
            return message.channel.send(`Lo siento <@${(_b = message.member) === null || _b === void 0 ? void 0 : _b.id}>, no tienes sufucientes privilegios!`);
        const fecht = yield message.channel.messages.fetch();
        message.channel.bulkDelete(fecht);
    });
}
exports.clear = clear;
