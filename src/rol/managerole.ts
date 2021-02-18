import {client} from '../app';
import {Message} from 'discord.js';

export async function addRole(message:Message) {
    if(!message.content.startsWith('!addrole')) return;

    if(!message.member?.hasPermission('MANAGE_ROLES')) return message.channel.send(`Lo siento <@${message.member?.id}>, no tienes sufucientes privilegios!`);
    
    const user = await message.mentions.users.first();

    if(!user) return message.channel.send("No mensionaste a ningun usuario");

    const member = await message.guild?.member(user);

    if(!member) return message.channel.send("Ese usuario no existe");

    const args = message.content.split(' ');
    
    const lrole = args[2];

    if(!lrole) return message.channel.send(`Especifica un rol`);

    const gRole = await message.guild?.roles.cache.find((r) => r.name == lrole);

    if(!gRole) return message.channel.send(`Lo siento ${message.author.username}, no se pudo encontrar el rol`);
        
    if(member.roles.cache.has(gRole.id)) return message.channel.send('El usuario ya tiene el rol');
    await(member.roles.add(gRole.id));

    message.channel.send(`Felicidades a <@${member.id}>, se le dio el rol de ${gRole.name}.`);
}

export async function removeRole(message:Message) {
    if(!message.content.startsWith('!removerole')) return;

    if(!message.member?.hasPermission('MANAGE_ROLES')) return message.channel.send(`Lo siento <@${message.member?.id}>, no tienes sufucientes privilegios!`);
    const user = await message.mentions.users.first();

    if(!user) return message.channel.send("No mensionaste a ningun usuario");

    const member = await message.guild?.member(user);

    if(!member) return message.channel.send("Ese usuario no existe");

    const args = message.content.split(' ');
    
    const lrole = args[2];

    if(!lrole) return message.channel.send(`Especifica un rol`);
    
    const gRole = await message.guild?.roles.cache.find((r) => r.name == lrole);
    
    if(!gRole) return message.channel.send(`Lo siento ${message.author.username}, no se pudo encontrar el rol`);
        
    if(!member.roles.cache.has(gRole.id)) return message.channel.send('El usuario no tiene este rol');
    await(member.roles.remove(gRole.id));
    
    message.channel.send(`RIP a <@${member.id}>, se le quito el rol de ${gRole.name}.`);
}