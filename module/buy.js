const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number

module.exports.run = async (client, message, args) => {

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
			if(json[username].argent >= 85 * numbers){
				json[username].argent -= 85 * numbers
				json[username].armees += 1 * numbers

				message.channel.send({embed: {
					color: 8510197,
					description: "**" + message.author.username + "** a acheté **" + numbers + "** armées pour **" + 85*numbers + "** a __" + username + "__"  
				}})

				// On put tout sa!
				request({ url: bdd, method: 'PUT', json: json}, callback)
			}

		}) // FIN DU REQUEST
	}

	if(args[0] == "flotte"){
		let numbers = args[1]
		let username = args[2]

		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK
			let json = JSON.parse(body)
			if(json[username].argent >= 85 * numbers){
				json[username].argent -= 85 * numbers
				json[username].flottes += 1 * numbers

				message.channel.send({embed: {
					color: 8510197,
					description: "**" + message.author.username + "** a acheté **" + numbers + "** flottes pour **" + 85*numbers + "** a __" + username + "__"  
				}})

				// On put tout sa!
				request({ url: bdd, method: 'PUT', json: json}, callback)
			}

		}) // FIN DU REQUEST
	}

}