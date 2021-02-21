import {Client} from 'discord.js';

export const client: Client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user?.tag}`);
    client.user?.setStatus('online');
});

client.login('Tu toke aqui');