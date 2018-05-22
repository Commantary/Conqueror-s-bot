const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = process.env.BDD || process.argv[2]
var bdd_number = process.env.BDDNUMBER || process.argv[2]
var bdd_id = process.env.BDDID || process.argv[2]

module.exports.run = (client, message, args) => {
		console.log(config.prefix + "profil " + args[0])
			request.get(bdd, function (err, res, body) {
			var data = JSON.parse(body)
			var searchPersonnUnverified = args[0]
			if(args[0]==undefined) return
			if (data[searchPersonnUnverified]!==undefined){
				var searchPersonn = data[searchPersonnUnverified]

				if (message.author.id == searchPersonn.id || message.member.roles.find("name", "Garde Royal")){
					message.channel.send({embed: {
						color: 11133683,
						fields: [{
					        name: "Pseudo:",
					        value: searchPersonn.name + "\n"
					      },
					      {
					        name: "Membre du Conseil Noir",
					        value: searchPersonn.membre
					      },
					      {
					        name: "Pouvoir",
					        value: searchPersonn.power
					      },
					      {
					        name: "planètes:",
					        value: searchPersonn.planetes + "\n"
					      },
					      {
					      	name: "Armées:",
					      	value: searchPersonn.armees + "\n"
					      },
					      {
					      	name: "Flottes:",
					      	value: searchPersonn.flottes + "\n"
					      },
					      {
					      	name: "Argents",
					      	value: searchPersonn.argent + "\n"
					      }
					    ]
					}}) // Fin de l'embed

				} else {
					message.channel.send({embed: {
						color: 16711744,
						description: "Tu n'es pas __" + args[0] + "__!"
					}})
				}

			} else {
				message.channel.send({embed: {
					description: 'Cette personne ne fais pas partie du jeu'
				}})
			}
			
		}) // FIN DU REQUEST

} // FIN DU MODULE EXPORTS
