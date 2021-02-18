import {client} from '../app';
import {Message, MessageEmbed} from 'discord.js';

export async function rep(message:Message) {
    if(!message.content.startsWith('!rep')) return;

    const embed = new MessageEmbed()
        .setTitle(':iphone: Repositorios :iphone:')
        .setAuthor(client.user?.username, client.user?.displayAvatarURL())
        .setColor('0xFF0000')
        .setThumbnail("https://media.giphy.com/media/10LKovKon8DENq/giphy.gif")
        .setDescription("Estos son los repositorios oficiales de kyodo. No siga otros repositorios no mencionados aqui")
        .addField('Servidor:', 'Aqui el repositorio del servidor', false)
        .addField('Escritorio:', 'Aqui el repositorio de la aplicacion de escritorio', false)
        .addField('Dueño del servidor', message.guild?.owner?.displayName, true)
        .addField('Id del mensaje', message.guild?.id, true)
        .addField('Instagram: ', '[@perfil de instagram](Link del instagram)')
        .addField('Twitter: ', '[@perfil de twitter](Link del twitter)')
        .addField('Youtube: ', "[@perfil de youtube](Link del youtube)")
        .setFooter(`No olvides ${message.member?.displayName} tomarte las cosas con calma y ve a tu ritmo ` , client.user?.displayAvatarURL())
        .setTimestamp();
    message.channel.send(embed);
}

export async function chan(message:Message) {
    if(!message.content.startsWith('!chan')) return;

    const embed = new MessageEmbed()
        .setTitle(':cinema: Canal :cinema:')
        .setAuthor(client.user?.username, client.user?.displayAvatarURL())
        .setColor('0xFF0000')
        .setThumbnail("https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif")
        .setDescription("Este es el canal oficial de youtube. Este es el unico canal oficial.")
        .addField('Canal:', '[lotHEntR L](https://www.youtube.com/channel/UC0trHerKKwkbSp1UxNPMt0w)', false)
        .addField('Dueño del servidor', message.guild?.owner?.displayName, true)
        .addField('Id del mensaje', message.guild?.id, true)
        .addField('Instagram: ', '[@perfil de instagram](Link del instagram)')
        .addField('Twitter: ', '[@perfil de twitter](Link del twitter)')
        .addField('Instagram: ', "[@perfil de youtube](Link del youtube)")
        .setFooter(`No olvides ${message.member?.displayName} tomarte las cosas con calma y ve a tu ritmo ` , client.user?.displayAvatarURL())
        .setTimestamp();
    message.channel.send(embed);
}