import {Client} from 'discord.js';

export const client: Client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user?.tag}`);
    client.user?.setStatus('online');
});

client.login('ODA1Mzg2ODk3MDY4MjYxMzgx.YBaI_w.I8k7XY6jxqXmjZQcUT9iMQF7opE');