const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = process.env.BDD || process.argv[2]
var bdd_number = process.env.BDDNUMBER || process.argv[2]
var bdd_id = process.env.BDDID || process.argv[2]

module.exports.run = (client, message, args) => {

	if(message.author.id === "214846601066315776" || message.member.roles.find("name", "Garde Royale")){

		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK

			var guyAtAdd = args[0]
			var guyLowerCase = guyAtAdd.toLowerCase()
			var data = JSON.parse(body)

			data[guyLowerCase] = {
				"tag": "!" + guyAtAdd + "!",
				"id": message.author.id,
				"name": guyAtAdd,
				"nameLowerCase": guyLowerCase,
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
				var personnToAdd = args[0]
				var personnNameLowerCase = personnToAdd.toLowerCase()
				number++
				json[number] = {
					"name": personnToAdd,
					"nameLowerCase": personnNameLowerCase
				}
				json.number = number

				// On put tout sa!
				request({ url: bdd_number, method: 'PUT', json: json}, callback)

			})

				request.get(bdd_id, function (err, res, body) {
					function callback(err, response, body) { // DEBUT DE CALLBACK
				      if (err) {
				        console.log(err)
				      }
				    } // FIN DE CALLBACK

				var json = JSON.parse(body)
				var personnToAdd = args[0]
				var personnNameLowerCase = personnToAdd.toLowerCase()
				json[message.author.id] = {
					"name": personnToAdd,
					"nameLowerCase": personnNameLowerCase
				}

				// On put tout sa!
				request({ url: bdd_id, method: 'PUT', json: json}, callback)

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
					var personnToAdd = args[0]
					var personnNameLowerCase = personnToAdd.toLowerCase()
					number++
					json[number] = {
						"name": personnToAdd,
						"nameLowerCase": personnNameLowerCase
					}
					json.number = number

					// On put tout sa!
					request({ url: bdd_number, method: 'PUT', json: json}, callback)

				})

				request.get(bdd_id, function (err, res, body) {
					function callback(err, response, body) { // DEBUT DE CALLBACK
				      if (err) {
				        console.log(err)
				      }
				    } // FIN DE CALLBACK

				var json = JSON.parse(body)
				var personnToAdd = args[0]
				var personnNameLowerCase = personnToAdd.toLowerCase()
				json[message.author.id] = {
					"name": personnToAdd,
					"nameLowerCase": personnNameLowerCase
				}

				// On put tout sa!
				request({ url: bdd_id, method: 'PUT', json: json}, callback)

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