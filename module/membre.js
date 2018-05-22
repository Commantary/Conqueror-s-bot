const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number

module.exports.run = (client, message, args) => {
	
	if(message.member.roles.find("name", "Garde Royale")){
		console.log(message.content.substring(10,50))
		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK
			var data = JSON.parse(body)
			var searchPersonnUnverified = message.content.substring(10,50)
			if(args[0]==undefined) return
			if(args[1]==undefined) return

			if (data[searchPersonnUnverified]!==undefined){
				var searchPersonn = data[searchPersonnUnverified]

				switch (args[0]){
					case "0":
						searchPersonn.power = "Aucun"
						searchPersonn.membre = "Ne fais pas partie du Conseil Noir"
						var phrase = "**" + searchPersonn.name + "** n'a pas de **pouvoir** et ne fais pas partie du Conseil Noir"
						break;
					case "1":
						searchPersonn.power = "Sphère du Mystère"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "2":
						searchPersonn.power = "Sphère du Renseignement Impérial"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "3":
						searchPersonn.power = "Sphère des Sciences Biotiques"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "4":
						searchPersonn.power = "Sphère de la Technologie"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "5":
						searchPersonn.power = "Sphère de la Diplomatie"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "6":
						searchPersonn.power = "Sphère de la Défense de l'Empire"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "7":
						searchPersonn.power = "Sphère de l'Offensive Militaire"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "8":
						searchPersonn.power = "Sphère de la Stratégie Militaire"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "9":
						searchPersonn.power = "Sphère de la Philosophie"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "a":
						searchPersonn.power = "Sphère du Savoir Ancestral"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "b":
						searchPersonn.power = "Sphère de la Justice"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					case "c":
						searchPersonn.power = "Sphère de la Logistique & Production"
						searchPersonn.membre = "oui"
						var phrase = "**" + searchPersonn.name + "** a le pouvoir **" + searchPersonn.power + "** et fais parti du Conseil Noir"
						break;
					default: searchPersonn.power = "Aucun"
				}

				message.channel.send({embed: {
					color: 11133683,
					description: phrase
				}})

			}

			// On put tout sa!
			request({ url: bdd, method: 'PUT', json: data}, callback)

		}) // FIN DU REQUEST

	} else {
		message.channel.send({embed: {
			description: 'Cette personne ne fais pas partie du jeu'
		}})
	}

} // FIN DU MODULE EXPORTS