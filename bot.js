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
    msg.channel.sendMessage('Amacı Türk Topluluğunu Bi Araya Getirmek Olan Sistem');
  }
});

client.login('NjAxMTA4NDYwOTY0MTUxMzAx.XTG0DQ.CGjBZ9jMU5HsWW-6SxDbBed-NhA');
