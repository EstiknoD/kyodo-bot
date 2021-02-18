import {Message} from 'discord.js';

export async function clear(message:Message) {
    if(!message.content.startsWith('!clear')) return;
    if (message.channel.type == "dm") return;

    if(!message.member?.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Lo siento <@${message.member?.id}>, no tienes sufucientes privilegios!`);

    const fecht = await message.channel.messages.fetch();
    message.channel.bulkDelete(fecht);
}