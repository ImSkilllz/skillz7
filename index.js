const Discord = require('discord.js');
const bot1 = new Discord.Client();
const prefix = '+'

bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

 bot1.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot1.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot1.on('message', function(message) {
	const myID = "300559968527187970";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الاسم الذي تريده.');
        bot1.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setGame(args , 'https://twitch.tv/LOP');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "offstatus")) {
                if(message.author.id !== myID) return;
bot1.user.setGame(args , '');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        bot1.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب رابط الصوره التي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});






bot1.login("NDc0MzA5MDY1MzcyMjA1MDc2.DrY2LA.ZnqHYi-q3xg3nU5wh_Ov86Ld-fI");




const bot2 = new Discord.Client();


bot2.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot2.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot2.guilds.size} " ]`);
  console.log(`Users! [ " ${bot2.users.size} " ]`);
  console.log(`channels! [ " ${bot2.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 


bot2.on('message', function(message) {
	const myID = "279194403564814336";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الاسم الذي تريده.');
        bot2.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setGame(args , 'https://twitch.tv/LOP');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "offstatus")) {
                if(message.author.id !== myID) return;
bot2.user.setGame(args , '');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        bot2.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب رابط الصوره التي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});



 bot2.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot2.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});


bot2.login("NDc0MzA2OTczNzY0OTQzOTIy.DrY11w.XoqbjOQOkZF0BW1-3f2xbEeQ720");





const bot3 = new Discord.Client();

 bot3.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot3.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot3.login("NDc0MzA4NDk1OTcwMjcxMjM0.DrY1lw.Jy2BWU4UXD_jXqNXLntYMA7THbY");



const bot4 = new Discord.Client();

 bot4.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot4.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot4.login("NDc0NTI1NzIwNzEwODczMDg4.DrYyCA.4IwKxbDRD-Udq4pRgMFvV84wm_0");




const bot5 = new Discord.Client();

 bot5.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot5.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot5.login.("NDc0NjA3NTYyNjI1NjQ2NjAz.DrcTjA.tpmpkGOY0S7MuC6Dlf5C4Ru6l64");

const bot6 = new Discord.Client();

 bot6.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot6.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot6.login.("NDc0Njc3MDM0NTY4NjQ2Njg0.DrcUKw.mqa3Lb9GXxWmEOQFP4RF2hnvRUU");


const bot7 = new Discord.Client();

 bot7.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot7.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot7.login.("NDc0ODgzNzI1MDg0MDY1Nzky.DrcUrw.2c8MtZ7_hqLIhjRcbJgdrAYwqKs");

const bot8 = new Discord.Client();

 bot8.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot8.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot8.login.("NDc0ODg1MzMxMzUxNzY0OTkz.DrcXQA.9Tvmq_lxp0ifsDxr0OBP4AhNiOw");

const bot9 = new Discord.Client();

 bot9.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot9.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot9.login.("NDc0ODg3MjE5Mzc5ODMwNzk1.DrcX2w.wm39DU3WcdBEPhhlNGbe9qLC_uE");

