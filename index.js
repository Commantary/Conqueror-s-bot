// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/config.json')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))

// On start le bot
client.on('ready', () => {

  function calling() {
    console.log("interval 1")
    try {
      let interval = require(`./module/teste.js`)
      let interval2 = require('./module/argent.js')
      interval.run(client)
      interval2.run(client)
    } catch (err) {
      console.log(err)
    }
  }
  setInterval(calling,86400000) // 24h = 86 400 000
    
  client.user.setGame('Lancer des dès')
  console.log('')
  console.log('    [!] Conqueror\'s bot beta connecté [!]')
  console.log('')
  console.log('le prefix est: ' + setting.prefix)
})

//ARRIVER DEPARTS
const arv = require('./module/arriverdeparts.js')
arv(client)

//LEVELS
const level = require('./module/levels.js')
level(client)

client.on('message', message => {
  if (message.author.bot) return
  if (message.content.indexOf(config.prefix) !== 0) return 

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./module/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    // Variables
    var adder2 = message.content.slice(config.prefix.length).trim().split(" ")
    var adder = message.content.substring(2,5).trim()
    var nb2 = adder2.shift().toLowerCase();
    var maxx = Number(message.content.slice(config.prefix.length).trim().split("d"))
    var max = message.content.slice(config.prefix.length).trim().split("d")
    var nb = max.shift().toLowerCase();
    var min = 1
if(nb2 = "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "10"){
    // Début du programme ! ;D
    if (max !== undefined){
      if (nb => 0){

        switch (nb) {
          case "0":
            message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# 0\n```\n```Markdown\n0\n```"
            }})
            break;

        case "1":
          var result = Math.floor(Math.random() * (max - min) + min);
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + result + "\n```"
          }})
          break;

        case "2":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + "\n```"
          }})
          break;

        case "3":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + "\n```"
          }})
          break;

        case "4":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var r4 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 +"\n```"
          }})
          break;

        case "5":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var r4 = Math.floor(Math.random() * (max  min) + min);
          var r5 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + "\n```"
          }})
          break;

        case "6":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var r4 = Math.floor(Math.random() * (max  min) + min);
          var r5 = Math.floor(Math.random() * (max  min) + min);
          var r6 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5+r6
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + "\n```"
          }})
          break;

        case "7":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var r4 = Math.floor(Math.random() * (max  min) + min);
          var r5 = Math.floor(Math.random() * (max  min) + min);
          var r6 = Math.floor(Math.random() * (max  min) + min);
          var r7 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + "\n```"
          }})
          break;

        case "8":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var r4 = Math.floor(Math.random() * (max  min) + min);
          var r5 = Math.floor(Math.random() * (max  min) + min);
          var r6 = Math.floor(Math.random() * (max  min) + min);
          var r7 = Math.floor(Math.random() * (max  min) + min);
          var r8 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + "\n```"
          }})
          break;

        case "9":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var r4 = Math.floor(Math.random() * (max  min) + min);
          var r5 = Math.floor(Math.random() * (max  min) + min);
          var r6 = Math.floor(Math.random() * (max  min) + min);
          var r7 = Math.floor(Math.random() * (max  min) + min);
          var r8 = Math.floor(Math.random() * (max  min) + min);
          var r9 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8+r9
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + "\n```"
          }})
          break;

        case "10":
          var r1 = Math.floor(Math.random() * (max  min) + min);
          var r2 = Math.floor(Math.random() * (max  min) + min);
          var r3 = Math.floor(Math.random() * (max  min) + min);
          var r4 = Math.floor(Math.random() * (max  min) + min);
          var r5 = Math.floor(Math.random() * (max  min) + min);
          var r6 = Math.floor(Math.random() * (max  min) + min);
          var r7 = Math.floor(Math.random() * (max  min) + min);
          var r8 = Math.floor(Math.random() * (max  min) + min);
          var r9 = Math.floor(Math.random() * (max  min) + min);
          var r10 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8+r9+r10
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + " + " + r10 + "\n```"
          }})
          break;

        } // FIN DU SWITCH
      }// FIN DU IF
    }
  }

  if(nb2 = "a"){
      console.log(adder)
      if (adder => 0){
        switch (adder) {
          case "0":
            message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# 0\n```\n```Markdown\n0\n```"
            }})
            break;

        case "1":
          var result = Math.floor(Math.random() * (6  min) + min);
          console.log(1)
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + result + "\n```"
          }})
          break;

        case "2":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + "\n```"
          }})
          break;

        case "3":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + "\n```"
          }})
          break;

        case "4":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 +"\n```"
          }})
          break;

        case "5":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + "\n```"
          }})
          break;

        case "6":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + "\n```"
          }})
          break;

        case "7":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6  -min) + min);
          var r3 = Math.floor(Math.random() * (6  min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + "\n```"
          }})
          break;

        case "8":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var r8 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + "\n```"
          }})
          break;

        case "9":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var r8 = Math.floor(Math.random() * (6 - min) + min);
          var r9 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8+r9
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + "\n```"
          }})
          break;

        case "10":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var r8 = Math.floor(Math.random() * (6 - min) + min);
          var r9 = Math.floor(Math.random() * (6 - min) + min);
          var r10 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8+r9+r10
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + " + " + r10 + "\n```"
          }})
          break;

        } // FIN DU SWITCH
      } else if (nb2 = "f") {
      console.log(adder)
      if (adder => 0){
        switch (adder) {
          case "0":
            message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# 0\n```\n```Markdown\n0\n```"
            }})
            break;

        case "1":
          var result = Math.floor(Math.random() * (6  min) + min);
          console.log(1)
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + result + "\n```"
          }})
          break;

        case "2":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + "\n```"
          }})
          break;

        case "3":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + "\n```"
          }})
          break;

        case "4":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 +"\n```"
          }})
          break;

        case "5":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + "\n```"
          }})
          break;

        case "6":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + "\n```"
          }})
          break;

        case "7":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + "\n```"
          }})
          break;

        case "8":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var r8 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + "\n```"
          }})
          break;

        case "9":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var r8 = Math.floor(Math.random() * (6 - min) + min);
          var r9 = Math.floor(Math.random() * (6 - min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8+r9
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + "\n```"
          }})
          break;

        case "10":
          var r1 = Math.floor(Math.random() * (6 - min) + min);
          var r2 = Math.floor(Math.random() * (6 - min) + min);
          var r3 = Math.floor(Math.random() * (6 - min) + min);
          var r4 = Math.floor(Math.random() * (6 - min) + min);
          var r5 = Math.floor(Math.random() * (6 - min) + min);
          var r6 = Math.floor(Math.random() * (6 - min) + min);
          var r7 = Math.floor(Math.random() * (6 - min) + min);
          var r8 = Math.floor(Math.random() * (6 - min) + min);
          var r9 = Math.floor(Math.random() * (6 - min) + min);
          var r10 = Math.floor(Math.random() * (max  min) + min);
          var result = r1+r2+r3+r4+r5+r6+r7+r8+r9+r10
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + " + " + r10 + "\n```"
          }})
          break;

        } // FIN DU SWITCH
      }

    }
   

  

    
}
    

  }
})

var dt = process.env.TOKEN || process.argv[2]

if (!dt) {
  console.log('')
}

client.login(dt)
