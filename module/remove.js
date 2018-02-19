const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var bdd = process.env.BDD || process.argv[2]


module.exports.run = async (client, message, args) => {
		var montant = Number(args[1])

		function callback(err, response, body) { // DEBUT DE CALLBACK
	      if (err) {
	        console.log(err)
	      }
	    } // FIN DE CALLBACK

	    if(args[0]==="planete"){
	    	var searchPersonnUnverified = message.content.substring(18,50).trim()
	    	request.get(bdd, function (err, res, body) {

			    var data = JSON.parse(body)
		    	if(data[searchPersonnUnverified]!==undefined){
		    		// Variables
		    		var searchPersonn = data[searchPersonnUnverified]
		    		var oldPlanetes = searchPersonn.planetes
				    	searchPersonn.planetes = searchPersonn.planetes-montant

				    	// On put tout sa!
			      		request({ url: bdd, method: 'PUT', json: data}, callback)

			      		message.channel.send({embed: {
							color: 11133683,
			      			description: "**" + message.author.username + "** a enlevé **" + montant + "** planètes à **" + searchPersonn.name + "**\n```Markdown\nAvant: # " + oldPlanetes + "\nMaintenant: # " + searchPersonn.planetes + "\n```"
			      		}})

				    }
			}) // FIN DU REQUEST
	    } // FIN DE L'ADD PLANETE

	    if(args[0]==="armee"){
	    	var searchPersonnUnverified = message.content.substring(16,50).trim()

	    	request.get(bdd, function (err, res, body) {
			    var data = JSON.parse(body)

		    	if(data[searchPersonnUnverified]!==undefined){ // PR VERIF SI LE GARS EXISTE
		    		// Variables
		    		var searchPersonn = data[searchPersonnUnverified]
		    			oldArmees = searchPersonn.armees
				    	searchPersonn.armees = searchPersonn.armees-montant

				    	// On put tout sa!
			      		request({ url: bdd, method: 'PUT', json: data}, callback)

			      		message.channel.send({embed: {
			      			color: 11133683,
			      			description: "**" + message.author.username + "** a enlevé **" + montant + "** armées à **" + searchPersonn.name + "**\n```Markdown\nAvant: # " + oldArmees + "\nMaintenant: # " + searchPersonn.armees + "\n```"
			      		}})

				    }
			}) // FIN DU REQUEST
	    } // FIN DE L'ADD ARMEES

} // FIN DU MODULE EXPORTS