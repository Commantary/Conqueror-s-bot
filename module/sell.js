const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = process.env.BDD || process.argv[2]
var bdd_number = process.env.BDDNUMBER || process.argv[2]
var bdd_id = process.env.BDDID || process.argv[2]

module.exports.run = async (client, message, args) => {

	if(args[1] == "armee"){
		let prix = args[0]
		let numbers = args[2]
		let vendeur = args[3]
		let acheteur = args[4]
		
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
					const channelVente = message.guild.channels.find("name", "ventes");

					const awaitMessage = await channelVente.send({embed: {
				        color: 16711744,
				        description: "**" + message.author.username + "** souhaite vendre **" + numbers + "** armée pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\n<@" + json[acheteur].id + "> êtes-vous d'accord ?"
				      }})
				    //Réagir à notre message
				    await awaitMessage.react('✅') // YES
				    await awaitMessage.react('❎') // NO

					const collector = awaitMessage.createReactionCollector((reaction, user) => user.id === json[acheteur].id)
					collector.on('collect', async(reaction) => {
					    const chosen = reaction.emoji.name;
					    if(chosen === "✅" ){
					    	// VENDEUR
							json[vendeur].argent += numbers*prix
							json[vendeur].armee -= 1 * numbers
							// ACHETEUR
							json[acheteur].argent -= numbers*prix
							json[acheteur].armee += 1 * numbers

							// On put tout sa!
							request({ url: bdd, method: 'PUT', json: json}, callback)

							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a vendu **" + numbers + "** armée pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
					        }})
					        collector.stop();
					    }else if(chosen === "❎"){
							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a essayer de vendre **" + numbers + "** armée pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\nMais " + json[acheteur].name + " n'accepte pas l'offre"
					        }})
					      	await reaction.remove('✅')
       						await reaction.remove('❎')
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

	if(args[1] == "flotte"){
		let prix = args[0]
		let numbers = args[2]
		let vendeur = args[3]
		let acheteur = args[4]

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
					const channelVente = message.guild.channels.find("name", "ventes");

					const awaitMessage = await channelVente.send({embed: {
				        color: 16711744,
				        description: "**" + message.author.username + "** souhaite vendre **" + numbers + "** flottes pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\n<@" + json[acheteur].id + "> êtes-vous d'accord ?"
				      }})
				    //Réagir à notre message
				    await awaitMessage.react('✅') // YES
				    await awaitMessage.react('❎') // NO

					const collector = awaitMessage.createReactionCollector((reaction, user) => user.id === json[acheteur].id)
					collector.on('collect', async(reaction) => {
					    const chosen = reaction.emoji.name;
					    if(chosen === "✅" ){
					    	// VENDEUR
							json[vendeur].argent += numbers*prix
							json[vendeur].flottes -= 1 * numbers
							// ACHETEUR
							json[acheteur].argent -= numbers*prix
							json[acheteur].flottes += 1 * numbers

							// On put tout sa!
							request({ url: bdd, method: 'PUT', json: json}, callback)

							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a vendu **" + numbers + "** flottes pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
					        }})
					        collector.stop();
					    }else if(chosen === "❎"){
							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a essayer de vendre **" + numbers + "** flottes pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\nMais " + json[acheteur].name + " n'accepte pas l'offre"
					        }})
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

	if(args[1] == "planete"){
		let prix = args[0]
		let numbers = args[2]
		let vendeur = args[3]
		let acheteur = args[4]

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
					const channelVente = message.guild.channels.find("name", "ventes");

					const awaitMessage = await channelVente.send({embed: {
				        color: 16711744,
				        description: "**" + message.author.username + "** souhaite vendre **" + numbers + "** planete pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\n<@" + json[acheteur].id + "> êtes-vous d'accord ?"
				      }})
				    //Réagir à notre message
				    await awaitMessage.react('✅') // YES
				    await awaitMessage.react('❎') // NO

					const collector = awaitMessage.createReactionCollector((reaction, user) => user.id === json[acheteur].id)
					collector.on('collect', async(reaction) => {
					    const chosen = reaction.emoji.name;
					    if(chosen === "✅" ){
					    	// VENDEUR
							json[vendeur].argent += numbers*prix
							json[vendeur].planete -= 1 * numbers
							// ACHETEUR
							json[acheteur].argent -= numbers*prix
							json[acheteur].planete += 1 * numbers

							// On put tout sa!
							request({ url: bdd, method: 'PUT', json: json}, callback)

							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a vendu **" + numbers + "** planete pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*" 
					        }})
					        collector.stop();
					    }else if(chosen === "❎"){
							awaitMessage.edit({embed: {
					            color: 16711744,
					            description: "**" + message.author.username + "** a essayer de vendre **" + numbers + "** flottes pour **" + numbers*prix + " $** a **" + json[acheteur].name + "** au nom de *" + json[vendeur].name + "*\nMais " + json[acheteur].name + " n'accepte pas l'offre"
					        }})
					      	await reaction.remove('✅')
       						await reaction.remove('❎')
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