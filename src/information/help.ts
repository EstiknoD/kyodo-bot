import {Message, MessageEmbed} from 'discord.js';
import {client} from '../app';

export async function help(message:Message) {
    if(!message.content.startsWith('!help')) return;

    const embed = new MessageEmbed()
        .setTitle(':v: Ayuda :v:')
        .setAuthor(client.user?.username, client.user?.displayAvatarURL())
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
}