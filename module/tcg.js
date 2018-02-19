const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

	request.get('https://api.myjson.com/bins/od6gh', function (err, res, body) {
		var data = JSON.parse(body)
		var searchPersonnUnverified = args[0]
		

		if(args[0]==undefined) return

		if (data[searchPersonnUnverified]!==undefined){
			console.log('C pas undefined')
			var searchPersonn = data[searchPersonnUnverified]
			if (searchPersonn.membre === "non"){
				message.channel.send({embed: {
					fields: [{
				        name: "Pseudo:",
				        value: searchPersonn.name
				      },
				      {
				        name: "Membre du Conseil Noir",
				        value: "Ne fais pas partie du Conseil Noir"
				      },
				      {
				        name: "planètes:",
				        value: searchPersonn.planetes
				      },
				      {
				      	name: "Armées:",
				      	value: searchPersonn.armees
				      }
				    ]
				}}) // Fin de l'embed
			} else { // SI C UN MEMBRE DU CONSEILL NOIR
				message.channel.send({embed: {
					fields: [{
				        name: "Pseudo:",
				        value: searchPersonn.name
				      },
				      {
				        name: "Membre du Conseil Noir",
				        value: "Oui\n**Pouvoirs**: " searchPersonn.power
				      },
				      {
				        name: "planètes:",
				        value: searchPersonn.planetes
				      },
				      {
				      	name: "Armées:",
				      	value: searchPersonn.armees
				      }
				    ]
				}}) // Fin de l'embed
			}

		} else {
			message.channel.send({embed: {
				description: 'Cette personne ne fais pas partie du jeu'
			}})
		}
		
	}) // FIN DU REQUEST

} // FIN DU MODULE EXPORTS
