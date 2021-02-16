
module.exports = {
    async clear(message){
        if(message.content.startsWith("!clear")){
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Lo siento <@${message.member.id}>, no tienes sufucientes privilegios!`);

            const fetchedMessages = await message.channel.messages.fetch();
            message.channel.bulkDelete(fetchedMessages);
        }
    }
}