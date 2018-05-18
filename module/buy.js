const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = process.env.BDD || process.argv[2]
var bdd_number = process.env.BDDNUMBER || process.argv[2]

module.exports.run = (client, message, args) => {

	if(args[0] == "armee"){
		let numbers = args[1]
		let username = args[2]
		
		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK
			let json = JSON.parse(body)
			if (message.author.id == json[username].id || message.member.roles.find("name", "Garde Royale")){
				if(json[username].argent >= 85 * numbers){
					json[username].argent -= 85 * numbers
					json[username].armees += 1 * numbers

					message.channel.send({embed: {
						color: 8510197,
						description: "**" + message.author.username + "** a acheté **" + numbers + "** armées pour **" + 85*numbers + "** a __" + username + "__"  
					}})

					// On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				} else {
					message.channel.send({embed: {
						color: 16711744,
						description: "Tu n'as pas asser d'argent !"
					}})
				}

			} else {
				message.channel.send({embed: {
					color: 16711744,
					description: "Tu n'es pas __" + username + "__!"
				}})
			}
		}) // FIN DU REQUEST

	}

	if(args[0] == "flotte"){
		let numbers = args[1]
		let username = args[2]

		if (message.author.id == username.id || message.member.roles.find("name", "Garde Royale")){
			request.get(bdd, function (err, res, body) {
				function callback(err, response, body) { // DEBUT DE CALLBACK
			      if (err) {
			        console.log(err)
			      }
			    } // FIN DE CALLBACK
				let json = JSON.parse(body)
				
				if (message.author.id == json[username].id || message.member.roles.find("name", "Garde Royale")){
					if(json[username].argent >= 95 * numbers){
						json[username].argent -= 95 * numbers
						json[username].flottes += 1 * numbers

						message.channel.send({embed: {
							color: 8510197,
							description: "**" + message.author.username + "** a acheté **" + numbers + "** flottes pour **" + 85*numbers + "** a __" + username + "__"  
						}})

						// On put tout sa!
						request({ url: bdd, method: 'PUT', json: json}, callback)
					} else {
						message.channel.send({embed: {
							color: 16711744,
							description: "Tu n'as pas asser d'argent !"
						}})
					}
				} else {
					message.channel.send({embed: {
						color: 16711744,
						description: "Tu n'es pas __" + username + "__!"
					}})
				}
			}) // FIN DU REQUEST

	}

}
