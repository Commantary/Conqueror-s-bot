const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
	
	message.channel.send({embed: {
		color: 11133683,
		description: "=profil [pseudo sans maj]\n=add [planete/armee] [montant] [pseudo sans maj]\n=remove [planete/armee] [montant] [pseudo sans maj]"
	}})

} // FIN DU MODULE EXPORTS