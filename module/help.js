const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
	if(args[0]==="power"){

		message.channel.send({embed: {
		color: 11133683,
		description: "0: Aucun\n1: Sphère du Mystère\n2: Sphère du Renseignement Impérial\n3: Sphère des Sciences Biotiques\n4: Sphère de la Technologie\n5: Sphère de la Diplomatie\n6: Sphère de la Défense de l'Empire\n7: Sphère de l'Offensive Militaire\n8: Sphère de la Stratégie Militaire\n9: Sphère de la Philosophie\na: Sphère du Savoir Ancestral\nb: Sphère de la Justice\nc: Sphère de la Logistique & Production"
		}})

	} else {

		message.channel.send({embed: {
		color: 11133683,
		description: "=profil [pseudo sans maj]\n=add [planete/armee] [montant] [pseudo sans maj]\n=remove [planete/armee] [montant] [pseudo sans maj]"
		}})

	}
} // FIN DU MODULE EXPORTS