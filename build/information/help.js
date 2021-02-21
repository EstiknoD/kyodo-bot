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
exports.help = void 0;
const discord_js_1 = require("discord.js");
const app_1 = require("../app");
function help(message) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.content.startsWith('!help'))
            return;
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(':v: Ayuda :v:')
            .setAuthor((_a = app_1.client.user) === null || _a === void 0 ? void 0 : _a.username, (_b = app_1.client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL())
            .setColor('BLUE')
            .setThumbnail("https://media.giphy.com/media/w6VY9ka8YDk9ac0Y3T/giphy.gif")
            .setDescription('Aqui podras ver los comandos que puedes usar con el bot.')
            .addField('!chan', 'Informacion basica del canal de youtube.', false)
            .addField('!rep', 'Informacion basica de los repositorios del proyecto', false)
            .addField('!kick (Nombre de la persona con el "@", sin los parentesis)', 'Te permite expulsar personas del servidor.', false)
            .addField('!ban (Nombre de la persona con el "@", sin los parentesis)', 'Te permite banear personas del servidor.', false)
            .addField('!addrole (Nombre de la persona con el "@", sin los parentesis) (Rol que quieras sin parentesis)', 'Te permite añadir roles a una persona.', false)
            .addField('!removerole (Nombre de la persona con el "@", sin los parentesis) (Rol que quieras sin parentesis)', 'Te permite quitar roles a una persona.', false)
            .addField('!clear', 'Te permite borrar los mensajes de un canal de texto.', false)
            .addField('!help', 'Te permite ver los comandos que puedes usar con el bot.', false)
            .setFooter('Si tienes alguna duda no olvides contactarsela a los administradores, moderadores o incluso al creador si esta disponible.')
            .setTimestamp();
        message.channel.send(embed);
    });
}
exports.help = help;
