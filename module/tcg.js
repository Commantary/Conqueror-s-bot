const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var bdd = process.env.BDD || process.argv[2]

module.exports.run = async (client, message, args) => {

	if (args[0]==="profil"){
			request.get(bdd, function (err, res, body) {
			var data = JSON.parse(body)
			var searchPersonnUnverified = message.content.substring(12,50)
			console.log(searchPersonnUnverified)
			if(args[1]==undefined) return

			if (data[searchPersonnUnverified]!==undefined){
				var searchPersonn = data[searchPersonnUnverified]

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
					      }
					    ]
					}}) // Fin de l'embed

			} else {
				message.channel.send({embed: {
					description: 'Cette personne ne fais pas partie du jeu'
				}})
			}
			
		}) // FIN DU REQUEST
		} // FIN DU PROFIL

} // FIN DU MODULE EXPORTS
