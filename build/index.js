"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ban_1 = require("./ban/ban");
const inf_1 = require("./information/inf");
const managerole_1 = require("./rol/managerole");
const basicfunct_1 = require("./basicfunct");
const help_1 = require("./information/help");
const app_1 = require("./app");
app_1.client.on('message', (message) => {
    if (!message.guild)
        return;
    basicfunct_1.clear(message);
    ban_1.kick(message);
    ban_1.ban(message);
    inf_1.rep(message);
    inf_1.chan(message);
    managerole_1.removeRole(message);
    managerole_1.addRole(message);
    help_1.help(message);
});
