const bot = require("../bot");

module.exports = {async rep(message){
    if (message.content.startsWith("!rep")) {
        message.channel.send('Los repositorios de kyodo son los siguientes: ');
        message.channel.send('kyodo desktop: https://gitlab.com/Estikno/kyodo-desktop');
        message.channel.send('kyodo server: https://github.com/EstiknoD/kyodo-server');
    }
},
 async channel(message){
    if (message.content.startsWith("!chan")) {
        message.channel.send('Los canales oficiales de kyodo es este: ');
        message.channel.send('https://www.youtube.com/channel/UC0trHerKKwkbSp1UxNPMt0w');
    }
}}