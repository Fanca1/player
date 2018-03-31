exports.run (cliente,message.args)=>{
      var razão = args.slice(1).join(" ")
	  
	  var usuario = message.mention.users.first();
	  if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBER")) return message.reply("você não tem permisão para usar esse comando")
	  if(message.mention.users.size < 1) return message.reply("você não mencionou ninguém")
	  if(!message.guild.member(usuario.id).bannable) return("eu não posso banir esse usuario")
	  if(razão.length < 2) return message.reply("você não colocou uma razão para banir essa pessoa")
	  
	  message.guild.member(usuario).ban()
	  
	 var embed = new discord.RichEmbed()
	 .setTitle("Membro Banido Com Sucesso")
	 .addField("usuario;",usuario.username)
	 addField("razão;", razão);
	 
	 message.channel.send(embed)
}
