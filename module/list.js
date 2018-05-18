const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number

module.exports.run = (client, message, args) => {
	console.log(3)
	// LES VARIABLES
	var array = []
	a = 0
	b = 0
	c = 1

	request.get(bdd, function (err, res, body) {
		console.log("1er request")
		var data = JSON.parse(body)
		var teste = body.split("!")

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
			console.log("Deuxieme request")
			var json = JSON.parse(body)
			var length_array = array.length-1
			a = 0
			
			for(c = 1;a<length_array;){
				console.log(c)
				var personn = json[c].name
				array[a] = array[a] + " **|** planetes: " + data[personn].planetes + " **|** armees: " + data[personn].armees + " **|** flottes: " + data[personn].flottes + " **|** argents: " + data[personn].argent
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
