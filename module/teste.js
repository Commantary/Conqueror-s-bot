const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
	console.log(args[0])
	message.channel.send('HEY')

} // FIN DU MODULE EXPORTS