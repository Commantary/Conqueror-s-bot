const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = process.env.BDD || process.argv[2]
var bdd_number = process.env.BDDNUMBER || process.argv[2]
var bdd_id = process.env.BDDID || process.argv[2]

module.exports.run = (client, message, args) => {
	// LES VARIABLES
	var array = []
	a = 0
	b = 0
	c = 1

	request.get(bdd, function (err, res, body) {
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
			var json = JSON.parse(body)
			var length_array = array.length-1
			a = 0
			
			for(c = 1;a<length_array;){
				console.log(c + " | " + json[c].name)
				var personn = json[c].nameLowerCase
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
