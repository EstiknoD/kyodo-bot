import {Message, UserResolvable, GuildMember} from 'discord.js';

export async function kick(message: Message){
    if(!message.content.startsWith('!kick')) return;

    if(!message.member?.hasPermission('KICK_MEMBERS')) return message.channel.send(`Lo siento <@${message.member?.id}>, no tienes sufucientes privilegios!`)

    const user = await message.mentions.users.first();

    if(!user) return message.channel.send("No mensionaste a ningun usuario");

    const member = await message.guild?.member(user);

    if(!member) return message.channel.send("Ese usuario no existe");

    member
        .kick(
            "Lo siento pero hemos decidido que te expulsamos. Puedes volver a entrar al servidor pero si se repite te podriamos banear."
        )
        .then(() => {
            message.channel.send(`${message.author.username} expulso a ${user.tag}!`)
        })
        .catch((e) => {
            message.channel.send(`${message.author.username} intento expulsar a ${user.tag} sin exito`);
            console.log(e);
        })
}

export async function ban(message: Message){
    if(!message.content.startsWith('!ban')) return;

    if(!message.member?.hasPermission('BAN_MEMBERS')) return message.channel.send(`Lo siento <@${message.member?.id}>, no tienes sufucientes privilegios!`)

    const user = await message.mentions.users.first();

    if(!user) return message.channel.send("No mensionaste a ningun usuario");

    const member = await message.guild?.member(user);

    if(!member) return message.channel.send("Ese usuario no existe");

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
        })
}