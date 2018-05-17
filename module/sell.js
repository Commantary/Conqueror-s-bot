const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number

module.exports.run = (client, message, args) => {

	if(args[0] == "armee"){
		let numbers = args[1]
		let vendeur = args[2]
		let acheteur = args[3]
		
		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK
			let json = JSON.parse(body)
			if (message.author.id == json[vendeur].id || message.member.roles.find("name", "Garde Royale")){
				if(json[vendeur].armees >= numbers && json[acheteur].argent >= 85 * numbers){
					// VENDEUR
					json[vendeur].argent += 85 * numbers
					json[vendeur].armees -= 1 * numbers
					// ACHETEUR
					json[acheteur].argent -= 85 * numbers
					json[acheteur].armees += 1 * numbers

					message.channel.send({embed: {
						color: 8510197,
						description: "**" + message.author.username + "** a vendu **" + numbers + "** armées pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
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
					description: "Tu ne peux pas vendre " + numbers + " armées au nom de " + vendeur
				}})
			}
		}) // FIN DU REQUEST
	}

	if(args[0] == "flotte"){
		let numbers = args[1]
		let vendeur = args[2]
		let acheteur = args[3]

		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK
			let json = JSON.parse(body)
			if (message.author.id == json[vendeur].id || message.member.roles.find("name", "Garde Royale")){
				if(json[vendeur].flottes >= numbers && json[acheteur].argent >= 85 * numbers){
					// VENDEUR
					json[vendeur].argent += 85 * numbers
					json[vendeur].flottes -= 1 * numbers
					// ACHETEUR
					json[acheteur].argent -= 85 * numbers
					json[acheteur].flottes += 1 * numbers

					message.channel.send({embed: {
						color: 8510197,
						description: "**" + message.author.username + "** a vendu **" + numbers + "** flottes pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
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
					description: "Tu ne peux pas vendre " + numbers + " flottes au nom de " + vendeur
				}})
			}
		}) // FIN DU REQUEST
	}

	if(args[0] == "planete"){
		let numbers = args[1]
		let vendeur = args[2]
		let acheteur = args[3]

		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK
			let json = JSON.parse(body)
			if (message.author.id == json[vendeur].id || message.member.roles.find("name", "Garde Royale")){
				if(json[vendeur].planete >= numbers && json[acheteur].argent >= 85 * numbers){
					// VENDEUR
					json[vendeur].argent += 85 * numbers
					json[vendeur].planete -= 1 * numbers
					// ACHETEUR
					json[acheteur].argent -= 85 * numbers
					json[acheteur].planete += 1 * numbers

					message.channel.send({embed: {
						color: 8510197,
						description: "**" + message.author.username + "** a vendu **" + numbers + "** planete pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
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
					description: "Tu ne peux pas vendre " + numbers + " planete au nom de " + vendeur
				}})
			}
		}) // FIN DU REQUEST
	}
	

}