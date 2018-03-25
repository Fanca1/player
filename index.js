console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    max_message_cache: 0
});
const moment = require('moment');
moment.locale('pt-BR');

const token = process.env.token;

client.on('guildMemberAdd', member => {
    client.guilds.get(member.guild.id).channels.get("418834373610307586").send(`Olá ${member}, Obrigado por entrar no Player South - Brasil Leia as regras e tenha uma boa estadia. `, {file: {attachment: "", name: 'welcome.gif'}});
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
 

    console.log(`Conectado !`)
    setTimeout(function() {
        console.log(`                   ---== PLAYER SOUTH ==---                 \n\nMembros: (${client.users.size}):\n\n${membrosNomes}`);
    }, 2000)
    client.user.setGame("Amor em " + client.users.size + " Membros");
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    setInterval(() => {
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)
    
});

@client.event
async def on_member_join(member):
  canal = client.get_channel("418834373610307586")
  regras = client.get_channel("418065547419320322")
  msg = "Bem Vindo {}\n Leia as {}".format(member.mention, regras.mention)
  await client.send_message(canal, msg) 

@client.event
async def on_member_remove(member):
   canal = client.get_channel("423328604911304708")
   msg = "Adeus Velho amigo :\ foi Bom ter você como membro, volte sempre. {}".format(member.mention)
   await client.send_message(member, msg) 
   
client.login(token)
