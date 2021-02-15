const { MessageEmbed } = require("discord.js");
const client = require("./bot");
const ban = require('./ban/ban')
const inf = require('./information/inf')
const manageRole = require('./rol/managerole');

const bot = require("./bot");

bot.on("message", async (message) => {
    if (!message.guild) return;

    await inf.rep(message);
    await inf.channel(message);

    await ban.kick(message);
    await ban.ban(message);

    await manageRole.addRole(message);
});
