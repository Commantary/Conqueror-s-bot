// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/config.json')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))

// On start le bot
client.on('ready', () => {
   function tafonction(){
    // traitement
    client.user.setGame('utilise la force', 'https://www.twitch.tv/the_commentary', 0)
    setTimeout(tafonction,10000) /* rappel après 2 secondes = 2000 millisecondes */
    }

tafonction()
  console.log('-------------------------------------')
  console.log('    [!] Conqueror\'s bot beta connecté [!]')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + setting.prefix)
})

//ARRIVER DEPARTS
const arv = require('./module/arriverdeparts.js')
arv(client)

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
    var max = message.content.slice(config.prefix.length).trim().split("d")
    var nb = max.shift().toLowerCase();

    

    if (nb => 1){
        switch (nb) {
        case "1":
          var result = Math.floor(Math.random() * max)
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + result + "\n```"
          }})
          break;

        case "2":
          var r1 = Math.floor(Math.random() * max)
          var r2 = Math.floor(Math.random() * max)
          var result = r1+r2
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + "\n```"
          }})
          break;

        case "3":
          var r1 = Math.floor(Math.random() * max)
          var r2 = Math.floor(Math.random() * max)
          var r3 = Math.floor(Math.random() * max)
          var result = r1+r2+r3
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + "\n```"
          }})
          break;

        case "4":
          var r1 = Math.floor(Math.random() * max)
          var r2 = Math.floor(Math.random() * max)
          var r3 = Math.floor(Math.random() * max)
          var r4 = Math.floor(Math.random() * max)
          var result = r1+r2+r3+r4
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 +"\n```"
          }})
          break;

        case "5":
          var r1 = Math.floor(Math.random() * max)
          var r2 = Math.floor(Math.random() * max)
          var r3 = Math.floor(Math.random() * max)
          var r4 = Math.floor(Math.random() * max)
          var r5 = Math.floor(Math.random() * max)
          var result = r1+r2+r3+r4+r5
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + "\n```"
          }})
          break;

        case "6":
          var r1 = Math.floor(Math.random() * max)
          var r2 = Math.floor(Math.random() * max)
          var r3 = Math.floor(Math.random() * max)
          var r4 = Math.floor(Math.random() * max)
          var r5 = Math.floor(Math.random() * max)
          var r6 = Math.floor(Math.random() * max)
          var result = r1+r2+r3+r4+r5+r6
          message.channel.send({embed: {
            color: 12434877,
            description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + "\n```"
          }})
          break;
        }

    }

  }
})

var dt = process.env.TOKEN || process.argv[2]

if (!dt) {
  console.log('')
}

client.login(dt)