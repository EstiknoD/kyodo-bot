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
exports.removeRole = exports.addRole = void 0;
function addRole(message) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!addrole'))
            return;
        if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission('MANAGE_ROLES')))
            return message.channel.send(`Lo siento <@${(_b = message.member) === null || _b === void 0 ? void 0 : _b.id}>, no tienes sufucientes privilegios!`);
        const user = yield message.mentions.users.first();
        if (!user)
            return message.channel.send("No mensionaste a ningun usuario");
        const member = yield ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.member(user));
        if (!member)
            return message.channel.send("Ese usuario no existe");
        const args = message.content.split(' ');
        const lrole = args[2];
        if (!lrole)
            return message.channel.send(`Especifica un rol`);
        const gRole = yield ((_d = message.guild) === null || _d === void 0 ? void 0 : _d.roles.cache.find((r) => r.name == lrole));
        if (!gRole)
            return message.channel.send(`Lo siento ${message.author.username}, no se pudo encontrar el rol`);
        if (member.roles.cache.has(gRole.id))
            return message.channel.send('El usuario ya tiene el rol');
        yield (member.roles.add(gRole.id));
        message.channel.send(`Felicidades a <@${member.id}>, se le dio el rol de ${gRole.name}.`);
    });
}
exports.addRole = addRole;
function removeRole(message) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!removerole'))
            return;
        if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission('MANAGE_ROLES')))
            return message.channel.send(`Lo siento <@${(_b = message.member) === null || _b === void 0 ? void 0 : _b.id}>, no tienes sufucientes privilegios!`);
        const user = yield message.mentions.users.first();
        if (!user)
            return message.channel.send("No mensionaste a ningun usuario");
        const member = yield ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.member(user));
        if (!member)
            return message.channel.send("Ese usuario no existe");
        const args = message.content.split(' ');
        const lrole = args[2];
        if (!lrole)
            return message.channel.send(`Especifica un rol`);
        const gRole = yield ((_d = message.guild) === null || _d === void 0 ? void 0 : _d.roles.cache.find((r) => r.name == lrole));
        if (!gRole)
            return message.channel.send(`Lo siento ${message.author.username}, no se pudo encontrar el rol`);
        if (!member.roles.cache.has(gRole.id))
            return message.channel.send('El usuario no tiene este rol');
        yield (member.roles.remove(gRole.id));
        message.channel.send(`RIP a <@${member.id}>, se le quito el rol de ${gRole.name}.`);
    });
}
exports.removeRole = removeRole;
