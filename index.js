// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const token = 'MzY0NjkwMzAwOTI2NDI3MTM4.DLTb0w.twS4DmRN3pfwm_y6gDA5oX0033Q'
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
    console.error(err)
  }

  fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`)
    let eventName = file.split('.')[0]
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args))
  })
})

})
client.login(token)
