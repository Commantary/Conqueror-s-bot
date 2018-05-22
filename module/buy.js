const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number

module.exports.run = async (client, message, args) => {

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
			if (message.author.id == json[vendeur].id || message.member.roles.find("name", "Garde Royal")){
				if(json[vendeur].armees >= numbers && json[acheteur].argent >= 85 * numbers){
					async function awaiTmessages() {
					const awaitMessage = await message.channel.send({embed: {
				        color: 16711744,
				        description: "**" + message.author.username + "** souhaite vendre **" + numbers + "** armée pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\n<@" + json[acheteur].id + "> êtes-vous d'accord ?"
				      }})
				    //Réagir à notre message
				    await awaitMessage.react('✅') // YES
				    await awaitMessage.react('❎') // NO

					const collector = awaitMessage.createReactionCollector((reaction, user) => user.id === json[acheteur].id)
					collector.on('collect', async(reaction) => {
					    const chosen = reaction.emoji.name;
					    if(chosen === "✅" ){
					    	// VENDEUR
							json[vendeur].argent += 85 * numbers
							json[vendeur].armee -= 1 * numbers
							// ACHETEUR
							json[acheteur].argent -= 85 * numbers
							json[acheteur].armee += 1 * numbers

							// On put tout sa!
							request({ url: bdd, method: 'PUT', json: json}, callback)

							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a vendu **" + numbers + "** armée pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
					        }})
					        collector.stop();
					    }else if(chosen === "❎"){
							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a essayer de vendre **" + numbers + "** armée pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\nMais " + json[acheteur].name + " n'accepte pas l'offre"
					        }})
					      	await emoji.remove('✅')
       						await emoji.remove('❎')
					        collector.stop();
					    }else{
					        // Stop navigating pages
					    }
					    
					});
				}
				awaiTmessages();

					// On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				} else {
					message.channel.send({embed: {
						color: 16711744,
						description: "Il y a un probleme d'argent pour la transaction !"
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
					async function awaiTmessages() {
					const awaitMessage = await message.channel.send({embed: {
				        color: 16711744,
				        description: "**" + message.author.username + "** souhaite vendre **" + numbers + "** flottes pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\n<@" + json[acheteur].id + "> êtes-vous d'accord ?"
				      }})
				    //Réagir à notre message
				    await awaitMessage.react('✅') // YES
				    await awaitMessage.react('❎') // NO

					const collector = awaitMessage.createReactionCollector((reaction, user) => user.id === json[acheteur].id)
					collector.on('collect', async(reaction) => {
					    const chosen = reaction.emoji.name;
					    if(chosen === "✅" ){
					    	// VENDEUR
							json[vendeur].argent += 95 * numbers
							json[vendeur].flottes -= 1 * numbers
							// ACHETEUR
							json[acheteur].argent -= 95 * numbers
							json[acheteur].flottes += 1 * numbers

							// On put tout sa!
							request({ url: bdd, method: 'PUT', json: json}, callback)

							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a vendu **" + numbers + "** flottes pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
					        }})
					        collector.stop();
					    }else if(chosen === "❎"){
							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a essayer de vendre **" + numbers + "** flottes pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\nMais " + json[acheteur].name + " n'accepte pas l'offre"
					        }})
					      	await emoji.remove('✅')
       						await emoji.remove('❎')
					        collector.stop();
					    }else{
					        // Stop navigating pages
					    }
					    
					});
				}
				awaiTmessages();

					// On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				} else {
					message.channel.send({embed: {
						color: 16711744,
						description: "Il y a un probleme d'argent pour la transaction !"
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
					async function awaiTmessages() {
					const awaitMessage = await message.channel.send({embed: {
				        color: 16711744,
				        description: "**" + message.author.username + "** souhaite vendre **" + numbers + "** planete pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\n<@" + json[acheteur].id + "> êtes-vous d'accord ?"
				      }})
				    //Réagir à notre message
				    await awaitMessage.react('✅') // YES
				    await awaitMessage.react('❎') // NO

					const collector = awaitMessage.createReactionCollector((reaction, user) => user.id === json[acheteur].id)
					collector.on('collect', async(reaction) => {
					    const chosen = reaction.emoji.name;
					    if(chosen === "✅" ){
					    	// VENDEUR
							json[vendeur].argent += 200 * numbers
							json[vendeur].planete -= 1 * numbers
							// ACHETEUR
							json[acheteur].argent -= 200 * numbers
							json[acheteur].planete += 1 * numbers

							// On put tout sa!
							request({ url: bdd, method: 'PUT', json: json}, callback)

							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a vendu **" + numbers + "** planete pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
					        }})
					        collector.stop();
					    }else if(chosen === "❎"){
							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a essayer de vendre **" + numbers + "** flottes pour **" + 85*numbers + "** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\nMais " + json[acheteur].name + " n'accepte pas l'offre"
					        }})
					      	await emoji.remove('✅')
       						await emoji.remove('❎')
					        collector.stop();
					    }else{
					        // Stop navigating pages
					    }
					    
					});
				}
				awaiTmessages();

					// On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				} else {
					message.channel.send({embed: {
						color: 16711744,
						description: "Il y a un probleme d'argent pour la transaction !"
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