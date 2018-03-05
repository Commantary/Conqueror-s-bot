const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var bdd = process.env.BDD || process.argv[2]
var bdd_number = process.env.BDDNUMBER || process.argv[2]

module.exports.run = async (client, message, args) => {

	if(message.author.id === "214846601066315776" ||message.author.id === "379345863903936522" || message.author.id === "214846601066315776"){

		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK

			var guyAtAdd = message.content.substring(11,50)
			var guyLowerCase = guyAtAdd.toLowerCase()
			var data = JSON.parse(body)

			data[guyLowerCase] = {
				"tag": "!" + guyAtAdd + "!",
				"name": guyAtAdd,
				"empereur": "non",
				"membre": "Ne fais pas partie du Conseil Noir",
				"power": "Aucun",
			    "planetes": 10,
			    "armees": 20,
			    "flottes": 20
			}
			// On put tout sa!
			request({ url: bdd, method: 'PUT', json: data}, callback)

			message.channel.send({embed: {
				color: 11133683,
				description: "**" + guyAtAdd + "** a été rajouter au jeu !"
			}})

				request.get(bdd_number, function (err, res, body) {
					function callback(err, response, body) { // DEBUT DE CALLBACK
				      if (err) {
				        console.log(err)
				      }
				    } // FIN DE CALLBACK

				var json = JSON.parse(body)
				var number = json.number
				var personnToAdd = message.content.substring(11,50)
				number++
				json[number] = {
					"name": personnToAdd
				}
				json.number = number

				// On put tout sa!
				request({ url: bdd_number, method: 'PUT', json: json}, callback)

			})
		})

	}

} // FIN DU MODULE EXPORTS