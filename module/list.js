const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var bdd = process.env.BDD || process.argv[2]
var bdd_number = process.env.BDDNUMBER || process.argv[2]

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
				a++
				c++
		}
		a--
		c--
		array[a] = "**[" + c + "]** ?????"
		
		request.get(bdd_number, function (err, res, body) {
			var json = JSON.parse(body)
			var length_array = array.length-1
			a = 0
			
			for(c = 1;a<length_array;){
				var personn = json[c].name
				array[a] = array[a] + " **|** planetes: " + data[personn].planetes + " **|** armees: " + data[personn].armees
				a++
				c++
			}

			message.channel.send({embed: {
				color: 11133683,
				author: {
		            name: 'Liste des joueurs'
		          },
				description: array.join('\n\n')
			}})
		})
	})

	// RESET DES VARIABLES
	a = 0
	b = 0
	c = 1

} // FIN DU MODULE EXPORTS
