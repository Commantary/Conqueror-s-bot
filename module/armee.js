const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')
var config = require("./config.json")
var bdd = config.bdd
var bdd_number = config.bdd_number
var bdd_id = config.bdd_id

module.exports.run = (client, message, args) => {

request.get(bdd_id, function (err, res, body1) {
	function callback(err, response, body) { // DEBUT DE CALLBACK
      if (err) {
        console.log(err)
      }
    } // FIN DE CALLBACK
	var data = JSON.parse(body1)
	console.log(data[message.author.id])
	if (data[message.author.id] !== undefined){
		var numbers = args[0]
		var personnAttaquer = args[1]
		var min = 1
		var authorId = message.author.id

		request.get(bdd, function (err, res, body) {
			function callback(err, response, body) { // DEBUT DE CALLBACK
		      if (err) {
		        console.log(err)
		      }
		    } // FIN DE CALLBACK
		    var json = JSON.parse(body)
		    var usernameOfPlayer = data[message.author.id].nameLowerCase

			if (numbers !== 0 && Number(json[usernameOfPlayer].armees)-Number(numbers) > 0){
				switch (numbers) {
				  case "0":
				    message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# 0\n```\n```Markdown\n0\n```"
				    }})
				    break;

				case "1":
				  var result = Math.floor(Math.random() * (6 - min) + min);
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  console.log(1)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + result + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "2":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "3":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "4":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var r4 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3+r4
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 +"\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "5":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var r4 = Math.floor(Math.random() * (6 - min) + min);
				  var r5 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3+r4+r5
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "6":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var r4 = Math.floor(Math.random() * (6 - min) + min);
				  var r5 = Math.floor(Math.random() * (6 - min) + min);
				  var r6 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3+r4+r5+r6
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "7":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6  -min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var r4 = Math.floor(Math.random() * (6 - min) + min);
				  var r5 = Math.floor(Math.random() * (6 - min) + min);
				  var r6 = Math.floor(Math.random() * (6 - min) + min);
				  var r7 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3+r4+r5+r6+r7
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "8":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var r4 = Math.floor(Math.random() * (6 - min) + min);
				  var r5 = Math.floor(Math.random() * (6 - min) + min);
				  var r6 = Math.floor(Math.random() * (6 - min) + min);
				  var r7 = Math.floor(Math.random() * (6 - min) + min);
				  var r8 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3+r4+r5+r6+r7+r8
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "9":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var r4 = Math.floor(Math.random() * (6 - min) + min);
				  var r5 = Math.floor(Math.random() * (6 - min) + min);
				  var r6 = Math.floor(Math.random() * (6 - min) + min);
				  var r7 = Math.floor(Math.random() * (6 - min) + min);
				  var r8 = Math.floor(Math.random() * (6 - min) + min);
				  var r9 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3+r4+r5+r6+r7+r8+r9
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  // On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				case "10":
				  var r1 = Math.floor(Math.random() * (6 - min) + min);
				  var r2 = Math.floor(Math.random() * (6 - min) + min);
				  var r3 = Math.floor(Math.random() * (6 - min) + min);
				  var r4 = Math.floor(Math.random() * (6 - min) + min);
				  var r5 = Math.floor(Math.random() * (6 - min) + min);
				  var r6 = Math.floor(Math.random() * (6 - min) + min);
				  var r7 = Math.floor(Math.random() * (6 - min) + min);
				  var r8 = Math.floor(Math.random() * (6 - min) + min);
				  var r9 = Math.floor(Math.random() * (6 - min) + min);
				  var r10 = Math.floor(Math.random() * (6 - min) + min);
				  var result = r1+r2+r3+r4+r5+r6+r7+r8+r9+r10
				  json[usernameOfPlayer].armees -= numbers
				  var armyBefore = Number(json[usernameOfPlayer].armees) + Number(numbers)
				  message.channel.send({embed: {
				    color: 12434877,
				    description: "```Markdown\n# " + result + "\n```\n```Markdown\n" + r1 + " + " + r2 + " + " + r3 + " + " + r4 + " + " + r5 + " + " + r6 + " + " + r7 + " + " + r8 + " + " + r9 + " + " + r10 + "\n```\n```Markdown\n" + json[usernameOfPlayer].name + " est passer de " + armyBefore + " armées à " + json[usernameOfPlayer].armees + " et a fait un score de " + result + " avec ces armées\n```"
				  }})
				  	// On put tout sa!
					request({ url: bdd, method: 'PUT', json: json}, callback)
				  break;

				} // FIN DU SWITCH

			} else {
				message.channel.send({embed: {
					color: 16711744,
					description: "Il y a eu une erreur, oubliez pas que vous pouvez utiliser entre 1 et 10 armées et que vous avez besoin d'avoir ces armées là bien-évidemment"
				}})
			} // FIN DU VERIF 0
		})
	} else {
		message.channel.send({embed: {
			color: 16711744,
			description: "Vous ne faites pas partie du jeu !"
		}})
	}

})

}