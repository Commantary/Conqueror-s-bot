const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number

module.exports.run = async (client) => {
	// LES VARIABLES
	var array = []
	a = 0
	b = 0
	c = 1

	request.get(bdd, function (err, res, body) {
		var data = JSON.parse(body)
		var teste = body.split("!")


		for(i=0;i<teste.length;i++){
				i++
				array[a] = "**[" + c + "]** " + teste[i]
				a++
				c++
		}
		a--
		c--
		array[a] = "**[" + c + "]** ?????"
		
		request.get(bdd_number, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK

			var json = JSON.parse(body)
			var length_array = array.length-1
			a = 0
			
			for(c = 1;a<length_array+1;){

				var personn = json[c].name
				
				console.log("Paye pour " + data[personn].name)
				let datanews = client.channels.find('name', 'datanews')
				if(b!==0){
					let emoji = client.emojis.random(1)
					data[personn].argent += 10 * data[personn].planetes
					datanews.send({embed: {
						color: 8510197,
						description: `L'argent du jour à été ajouter a ` + data[personn].name + `  ${emoji} \n\`\`\`Markdown\n+ ` + 10*data[personn].planetes + `$\n# ` + data[personn].planetes + ` planetes\`\`\``
					}})
				}
				
				a++
				c++
				b++
			}

			// On put tout sa!
			request({ url: bdd, method: 'PUT', json: data}, callback)
			console.log(array)

		})
	})

	// RESET DES VARIABLES
	a = 0
	b = 0
	c = 1
			
	var datanews = client.channels.find('name', 'datanews')
	let emoji = client.emojis.random(1)
	datanews.send({embed: {
		color: 8510197,
		description: `L'argent du jour à été ajouter ${emoji} `
	}})

} // FIN DU MODULE EXPORTS
