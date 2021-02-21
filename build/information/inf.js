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
exports.chan = exports.rep = void 0;
const app_1 = require("../app");
const discord_js_1 = require("discord.js");
function rep(message) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!rep'))
            return;
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(':iphone: Repositorios :iphone:')
            .setAuthor((_a = app_1.client.user) === null || _a === void 0 ? void 0 : _a.username, (_b = app_1.client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL())
            .setColor('0xFF0000')
            .setThumbnail("https://media.giphy.com/media/10LKovKon8DENq/giphy.gif")
            .setDescription("Estos son los repositorios oficiales de kyodo. No siga otros repositorios no mencionados aqui")
            .addField('Servidor:', '[server](https://github.com/EstiknoD/kyodo-server)', false)
            .addField('Escritorio:', '(A un no inicializado)', false)
            .addField('Dueño del servidor', (_d = (_c = message.guild) === null || _c === void 0 ? void 0 : _c.owner) === null || _d === void 0 ? void 0 : _d.displayName, true)
            .addField('Id del mensaje', (_e = message.guild) === null || _e === void 0 ? void 0 : _e.id, true)
            .addField('Twitter: ', '[@Kyodo](https://twitter.com/Kyodo29920590)')
            .addField('Youtube: ', "[lotHEntR L](https://www.youtube.com/channel/UC0trHerKKwkbSp1UxNPMt0w)")
            .setFooter(`No olvides ${(_f = message.member) === null || _f === void 0 ? void 0 : _f.displayName} tomarte las cosas con calma y ve a tu ritmo `, (_g = app_1.client.user) === null || _g === void 0 ? void 0 : _g.displayAvatarURL())
            .setTimestamp();
        message.channel.send(embed);
    });
}
exports.rep = rep;
function chan(message) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!chan'))
            return;
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(':cinema: Canal :cinema:')
            .setAuthor((_a = app_1.client.user) === null || _a === void 0 ? void 0 : _a.username, (_b = app_1.client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL())
            .setColor('GREEN')
            .setThumbnail("https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif")
            .setDescription("Este es el canal oficial de youtube. Este es el unico canal oficial.")
            .addField('Canal:', '[lotHEntR L](https://www.youtube.com/channel/UC0trHerKKwkbSp1UxNPMt0w)', false)
            .addField('Dueño del servidor', (_d = (_c = message.guild) === null || _c === void 0 ? void 0 : _c.owner) === null || _d === void 0 ? void 0 : _d.displayName, true)
            .addField('Id del mensaje', (_e = message.guild) === null || _e === void 0 ? void 0 : _e.id, true)
            .addField('Twitter: ', '[@Kyodo](https://twitter.com/Kyodo29920590)')
            .setFooter(`No olvides ${(_f = message.member) === null || _f === void 0 ? void 0 : _f.displayName} tomarte las cosas con calma y ve a tu ritmo `, (_g = app_1.client.user) === null || _g === void 0 ? void 0 : _g.displayAvatarURL())
            .setTimestamp();
        message.channel.send(embed);
    });
}
exports.chan = chan;
