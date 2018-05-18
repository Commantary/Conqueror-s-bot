const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number

module.exports.run = (client, message, args) => {

	if(message.author.id === "214846601066315776" || message.member.roles.find("name", "Garde Royale")){

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
				"id": message.author.id,
				"name": guyAtAdd,
				"empereur": "non",
				"membre": "Ne fais pas partie du Conseil Noir",
				"power": "Aucun",
			    "planetes": 10,
			    "armees": 20,
			    "flottes": 20,
			    "argent": 6
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

	} else {
		if(message.member.roles.find("name", "Adder")){

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
					"id": message.author.id,
					"name": guyAtAdd,
					"empereur": "non",
					"membre": "Ne fais pas partie du Conseil Noir",
					"power": "Aucun",
				    "planetes": 10,
				    "armees": 20,
				    "flottes": 20,
				    "argent": 6
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
		} else {
			message.channel.send({embed: {
				color: 16711744,
				description: "Tu n'as pas les permissions"
			}})
		}
	}

} // FIN DU MODULE EXPORTS