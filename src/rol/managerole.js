const bot = require("../bot");
const { channel } = require("../information/inf");

module.exports = {async addRole(message){

    if(message.content.startsWith("!addrole")){
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Lo siento <@${message.member.id}>, no tienes sufucientes privilegios!`);

        const member = await message.guild.member(message.mentions.users.first());

        if(!member){
            return message.channel.send(`Lo siento ${message.author.username} pero el usuario que menciona no existe`);
        }

        const args = message.content.split(' ');
    
        const lrole = args[2];


        if(!lrole) return message.channel.send(`Especifica un rol`);

        const gRole = await message.guild.roles.cache.find((r) => r.name == lrole);

        if(!gRole) return message.channel.send(`Lo siento ${message.author.username}, no se pudo encontrar el rol`);
        
        if(member.roles.cache.has(gRole.id)) return message.channel.send('El usuario ya tiene el rol');
        await(member.roles.add(gRole.id));

        message.channel.send(`Felicidades a <@${member.id}>, se le dio el rol de ${gRole.name}.`);
    }
},
async removeRole(message){

    if(message.content.startsWith("!removerole")){
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Lo siento <@${message.member.id}>, no tienes sufucientes privilegios!`);

        const member = await message.guild.member(message.mentions.users.first());
        if(!member){
            return message.channel.send(`Lo siento ${message.author.username} pero el usuario que menciona no existe`);
        }
        const args = message.content.split(' ');
    
        const lrole = args[2];

    
    
        if(!lrole) return message.channel.send(`Especifica un rol`);
    
        const gRole = await message.guild.roles.cache.find((r) => r.name == lrole);
    
        if(!gRole) return message.channel.send(`Lo siento ${message.author.username}, no se pudo encontrar el rol`);
        
        if(!member.roles.cache.has(gRole.id)) return message.channel.send('El usuario no tiene este rol');
        await(member.roles.remove(gRole.id));
    
        message.channel.send(`RIP a <@${member.id}>, se le quito el rol de ${gRole.name}.`);
    }
}}