const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var bdd = process.env.BDD || process.argv[2]

module.exports.run = async (client, message, args) => {
	// LES VARIABLES
	var array = []
	a = 0
	b = 0
	c = 1

	request.get(bdd, function (err, res, body) {
		var data = JSON.parse(body)
		var teste = body.split("!")
		console.log(teste[1])

		for(i=0;i<teste.length;i++){
				i++
				array[a] = "**[" + c + "]** " + teste[i]
				console.log(array[a] + "|" + teste[i] + "|")
				a++
				c++
		}
		a--
		c--
		array[a] = "**[" + c + "]** ?????"
		message.channel.send({embed: {
			color: 11133683,
			author: {
	            name: 'Liste des joueurs'
	          },
			description: array.join('\n')
		}})
	})

	// RESET DES VARIABLES
	a = 0
	b = 0
	c = 1

} // FIN DU MODULE EXPORTS
