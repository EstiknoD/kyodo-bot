import {kick, ban} from './ban/ban';
import {rep, chan} from './information/inf';
import {removeRole, addRole} from './rol/managerole';
import {clear} from './basicfunct';
import {Message} from 'discord.js';
import {help} from './information/help';

import {client} from './app';

client.on('message', (message: Message) => {
    if(!message.guild) return;

    clear(message);

    kick(message);
    ban(message);

    rep(message);
    chan(message);

    removeRole(message);
    addRole(message);

    help(message);
});