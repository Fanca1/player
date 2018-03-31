console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    max_message_cache: 0
});
const moment = require('moment');
moment.locale('pt-BR');

const prefix = "-"
const token = process.env.token;

client.on('guildMemberAdd', member => {
    client.guilds.get(member.guild.id).channels.get("418834373610307586").send(`Olá ${member}, Obrigado por entrar no **Player South - Brasil** Leia as regras e tenha uma boa estadia. `);
   })

client.on("ready", () => {

    let string = ''
    for (var i = 0; i < client.users.size; i++) {

        let userStatus = {
            online: 'online',
            idle: 'ausente',
            dnd: 'ocupado',
            offline: 'offline'
        }[client.users.array()[i].presence.status]

        string += "     - " + client.users.array()[i].username + " ( " + userStatus + " ) ,\n";
    }

    const membrosNomes = string
    var statusIDO = ["idle", "dnd", "online", ]
    var jogando = [`Digite -ajuda para ver meus comandos.`, `Divulgue nosso servidor, use: -convite`, `Divulgue nosso servidor e ganhe cargos especiais! ❣️ `, `Visite nosso canal no Youtube, digite: -youtube`, `Entre no servidor do nosso Parceiro, use: -athenos`, `Estamos com vagas na staff, para mais informações chame o dono do servidor no privado. `, `Para receber cargos de jogos, utilize a sala registro`, `Player South - Brasil ${client.users.size} membros, 😉 `] 

    console.log(`Conectado !`)
    setTimeout(function() {
        console.log(`                   ---== PLAYER SOUTH ==---                 \n\nMembros: (${client.users.size}):\n\n${membrosNomes}`);
    }, 2000)
    client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/zmarciogod");
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    setInterval(() => {
        client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/zmarciogod");
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)
    client.guilds.get("418065547419320320").channels.get("418840018593775617").sendMessage("**:warning: Reiniciado Automaticamente.**");
    
});

client.login(token)

client.on("message", (message) => {
	if(message.guild.id != "418065547419320320") return
	if(message.channel.id != "423881014331310100") return
	message.react('👍').then(function(teste){

message.react('👎')
})
});

client.on("message", (message) => {

    if(message.content.startsWith(prefix + "youtube")){
        message.reply("**Visite o canal do dono no youtube.\nhttps://www.youtube.com/channel/UCOcubNzQHrxIws_VSbV0bZQ :smile:**");
    }

    if(message.content.startsWith(prefix + "convite")){
        message.reply("**Convide seus amigos para o servidor: https://discord.gg/swacvgR**");
    }

    if(message.content.startsWith(prefix + "ajuda")){
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤㅤㅤㅤㅤㅤㅤ**:fire: AJUDA :fire:**ㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Comandos:**\n-ajuda\n-musicas\n-youtube\n-convite\n-avatar\n-athenos",
              "color": 16711680,
              "thumbnail": {
                "url": "https://i.imgur.com/AjAfhx7.png"
              }
            }
          });
    }

    if(message.content.startsWith(prefix + "athenos")){
        message.reply("**Servidor do nosso parceiro: https://discord.gg/9WUTx4A**");
    }

    if(message.content.startsWith(prefix + "avatar")){
        let user = message.mentions.users.first(); 
        if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
        if (message.mentions.users.size < 1) return message.channel.sendMessage({
        "embed": {
          "description": "**" + message.author.username + "**",
          "color": 16711680,
          "image": {
            "url": message.author.displayAvatarURL
          }
        }
      });
      message.channel.sendMessage({
        "embed": {
          "description": "**" + message.mentions.users.first().username + "**",
          "color": 16711680,
          "image": {
            "url": message.mentions.users.first().displayAvatarURL
          }
        }
      })
    }

    if(message.content.startsWith(prefix + "musicas")){
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤㅤㅤㅤㅤㅤㅤ**:fire: Comandos de Músicas :fire:**ㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Todos os Comandos:**",
              "color": 16711680,
              "thumbnail": {
                "url": "https://i.imgur.com/AjAfhx7.png"
              },
              "fields": [
                {
                  "name": ":fire: Sagiri:",
                  "value": "**-** ;tocar\n**-** ;pular\n**-** ;pausar\n**-** ;retomar\n**-** ;volume\n**-** ;votar",
                  "inline": true
                },
                {
                  "name": ":fire: Himebot:",
                  "value": "**-** .play\n**-** .jumpto\n**-** .pause\n**-** .stop\n**-** .resume\n**-** .voteskip",
                  "inline": true
                },
                {
                  "name": ":fire: Loritta:",
                  "value": "**-** +tocar\n**-** +pular\n**-** +pausar\n**-** +np",
                  "inline": true
                }
              ]
            }
          });
    }

})
