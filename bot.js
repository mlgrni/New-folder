const Discord = require('discord.js');
const EventEmitter = require('events');
const emitter = new EventEmitter()
require('events').EventEmitter.defaultMaxListeners = 15;

const queue = new Map();
const fs = require('fs');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);


});


client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'ArabGS.com',
            type: "Streaming",
            url: "https://www.twitch.tv/omarjxh"
        }
    });
  
});
	




client.on('message', message => {
    const swearWords = ["سلام عليكم","السلام عليكم"];
    if( swearWords.some(word => message.content.includes(word)) ) {

	     message.react('👋');
        message.reply('وعليكم السلام ورحمة الله وبركاته');
      }
});



client.on('message', function(message) {
    if (message.content == "!ags-clear") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                    	message.channel.send('its Clear xD');
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

}); 









client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "ags-delete") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد السطور التي تريد مسحها ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد السطور التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
}); 

client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .addField('▪| ' , `  ${member}`)
        .setDescription(`Member Left `)
        .setColor('RED')
     .setFooter("Arab Gaming Society ▪ AGS")
        .setTimestamp()	 
    var channel =member.guild.channels.find('name', 'join-left')
    if (!channel) return;
    channel.send({embed : embed});
    }) 
	

	client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'join-left');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
	    .setAuthor(member.user.username, member.user.avatarURL)
	    .addField('▪| ' , `  ${member}`)
        .setColor('#070707')
        .setThumbnail(memberavatar)
         .setDescription(`Member join `)
        .setColor('RED')
     .setFooter("Arab Gaming Society ▪ AGS")
        .setTimestamp()
      channel.sendEmbed(embed);
    }); 
	
	

	

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('#070707')
        .setThumbnail(memberavatar)
        .addField('▪| Welcome To AGS ' , ` أهلاً بك في مجتمعك `)
                .addField('▪| انت العضو رقم',`${member.guild.memberCount}`)
       //.addField('▪| invited by' , ` ${Invite.inviter} ;`)
        .addField('▪| ' , `  ${member}`)
                  .addField("▪| مجتمع الألعاب العربي",  `https://ArabGS.com` , true)
                     
                                       
     .setFooter("Arab Gaming Society ▪ AGS")
        .setTimestamp()
      channel.sendEmbed(embed);
    }); 



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
			
    return message.reply(`** يمنع النشر - الرجاء مراجعة قوانين السيرفر**`).then(m => m.delete(5000)); 

    }
	

});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ags-say") {
message.guild.channels.find("name", "chat").sendMessage(args.join("  "))
   message.delete()
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ags-say-ags_news") {
message.guild.channels.find("name", "ags_news").sendMessage(args.join("  "))
   message.delete()
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ags-say-news") {
message.guild.channels.find("name", "news").sendMessage(args.join("  "))
   message.delete()
  }
});




client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ags-say-events") {
message.guild.channels.find("name", "ags-events").sendMessage(args.join("  "))
   message.delete()
  }
});


	client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "🏅 Members ▪ AGS"); 
    member.addRole(role).catch(console.error);
});


client.on('message', message => {
    const swearWords = ["🖕", "💩","NNNNNNNNNNNNNNNN ","VVVVVVVVVVVVVVVVVVV"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
      }
}); 

client.on("message", message => {

            if (message.content.startsWith(prefix + "ags-bc-p")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== '').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Online Members`); 
 message.delete(); 
};     
});




client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Apex Legends Now");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Apex Legends") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing PUBG Now");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Fortnite Now");
  if(!playRole) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Fortnite") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});



client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find("name","edit-delete");
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **massege edited
by <@${message.author.id}>              Edited in channel ** <#${message.channel.id}>\n\n before edited:\n \`${message.cleanContent}\`\n\n after edited:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});


});


client.on("messageDelete", (messageDelete) => {

    if (messageDelete.author.bot) return;

      
    const channel = messageDelete.guild.channels.find("name", `edit-delete`);
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setTitle("Deleted Message:")
        .setColor("RANDOM")
        .setThumbnail(messageDelete.author.displayAvatarURL)
        .setDescription(`**Message sent by:**  ${messageDelete.author.tag} **Was Deleted in** ${messageDelete.channel}\n${messageDelete.content}`)
        .setTimestamp()
     channel.send({embed : embed});
});

client.on('message', message => {
if(message.content.startsWith(prefix + 'ags-moveall')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });

client.login(process.env.BOT_TOKEN);
