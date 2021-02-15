const bot = require("../bot");

module.exports = {async kick(message) {

  if (message.content.startsWith("!kick")) {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Lo siento <@${message.member.id}>, no tienes sufucientes privilegios!`);

    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        if (member.roles.cache.has(admitedRoles[0].id)) {
          message.channel.send(
            `Lo siento ${message.author.username} pero el miembro ${member.tag} es un creador y no los puedes banear!`
          );
          return;
        } else if (member.roles.cache.has(admitedRoles[1].id)) {
          if (role != "creador") {
            message.channel.send(
              `Lo siento ${message.author.username} pero el miembro ${member.tag} tiene un rol igual o superior al tuyo y por lo tanto no lo puedes banear!`
            );
            return;
          }
        } else if (member.roles.cache.has(admitedRoles[2].id)) {
          if (role != "creador" || role != "admin") {
            message.channel.send(
              `Lo siento ${message.author.username} pero el miembro ${member.tag} tiene un rol igual o superior al tuyo y por lo tanto no lo puedes banear!`
            );
            return;
          }
        }

        member
          .kick(
            "Lo siento pero hemos decidido que te expulsamos. Puedes volver a entrar al servidor pero si se repite te podriamos banear."
          )
          .then(() => {
            message.channel.send(
              `${message.author.username} expulso a ${user.tag}`
            );
          })
          .catch((err) => {
            message.channel.send(
              `${message.author.username} intento expulsar a ${user.tag} sin exito`
            );
            console.log(err);
          });
      } else {
        message.channel.send("Ese usuario no existe");
      }
    } else {
      message.channel.send("No mensionaste a ningun usuario");
    }
  }
},
async ban(message) {

  if (message.content.startsWith("!ban")) {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Lo siento <@${message.member.id}>, no tienes sufucientes privilegios!`);

    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        if (member.roles.cache.has(admitedRoles[0].id)) {
          message.channel.send(
            `Lo siento ${message.author.username} pero el miembro ${member.tag} es un creador y no los puedes banear!`
          );
          return;
        } else if (member.roles.cache.has(admitedRoles[1].id)) {
          if (role != "creador") {
            message.channel.send(
              `Lo siento ${message.author.username} pero el miembro ${member.tag} tiene un rol igual o superior al tuyo y por lo tanto no lo puedes banear!`
            );
            return;
          }
        } else if (member.roles.cache.has(admitedRoles[2].id)) {
          if (role != "creador" || role != "admin") {
            message.channel.send(
              `Lo siento ${message.author.username} pero el miembro ${member.tag} tiene un rol igual o superior al tuyo y por lo tanto no lo puedes banear!`
            );
            return;
          }
        }

        member
          .ban({
            reason: "Fuiste baneado del servidor por tus acciones",
          })
          .then(() => {
            message.channel.send(
              `${message.author.username} ha baneado a ${user.tag}`
            );
          })
          .catch((err) => {
            message.channel.send(`No se pudo banear a ${user.tag}`);
            console.log(err);
          });
      } else {
        message.channel.send("El usuario no existe!");
      }
    } else {
      message.channel.send("No mencionaste el usuario a banear!");
    }
  }
}}