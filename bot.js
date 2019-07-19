const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun Olan ${client.user.tag}Sunucuya Giriş Yaptı! `);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam Hoşgeldin');
  }
  if (msg.content.toLowerCase() === '!spawit') {
    msg.channel.sendMessage('Spawit Türkiye icin kurulmus bir Rakbetci Sitesidir. Suanda Beta da oldugu icin, tek bir Ranksistemiyle herkes karisik oyniyo.');
  }

  if (msg.content.toLowerCase() === '!que') {

    var url = 'https://www.spawit.com/api/getque';

    http.get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
        body += chunk;
      });

      res.on('end', function(){
        var fbResponse = JSON.parse(body);

        msg.channel.sendMessage(fbResponse);
      });
    }).on('error', function(e){
      console.log("Got an error: ", e);
    });



  }
});

// CLIENT LOGIN DELETED
client.login('NjAxNzc3NDM2NDc2MTc4NDY0.XTHPDQ.qAmuyC2x0cqsNkjr7k0oTis8XEc');
