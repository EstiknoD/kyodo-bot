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
exports.ban = exports.kick = void 0;
function kick(message) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!kick'))
            return;
        if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission('KICK_MEMBERS')))
            return message.channel.send(`Lo siento <@${(_b = message.member) === null || _b === void 0 ? void 0 : _b.id}>, no tienes sufucientes privilegios!`);
        const user = yield message.mentions.users.first();
        if (!user)
            return message.channel.send("No mensionaste a ningun usuario");
        const member = yield ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.member(user));
        if (!member)
            return message.channel.send("Ese usuario no existe");
        member
            .kick("Lo siento pero hemos decidido que te expulsamos. Puedes volver a entrar al servidor pero si se repite te podriamos banear.")
            .then(() => {
            message.channel.send(`${message.author.username} expulso a ${user.tag}!`);
        })
            .catch((e) => {
            message.channel.send(`${message.author.username} intento expulsar a ${user.tag} sin exito`);
            console.log(e);
        });
    });
}
exports.kick = kick;
function ban(message) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!ban'))
            return;
        if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission('BAN_MEMBERS')))
            return message.channel.send(`Lo siento <@${(_b = message.member) === null || _b === void 0 ? void 0 : _b.id}>, no tienes sufucientes privilegios!`);
        const user = yield message.mentions.users.first();
        if (!user)
            return message.channel.send("No mensionaste a ningun usuario");
        const member = yield ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.member(user));
        if (!member)
            return message.channel.send("Ese usuario no existe");
        member
            .ban({
            reason: "Fuiste baneado del servidor por tus acciones"
        })
            .then(() => {
            message.channel.send(`${message.author.username} ha baneado a ${user.tag}`);
        })
            .catch((e) => {
            message.channel.send(`No se pudo banear a ${user.tag}`);
            console.log(e);
        });
    });
}
exports.ban = ban;
