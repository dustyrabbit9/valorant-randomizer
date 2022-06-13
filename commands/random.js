const { SlashCommandBuilder } = require("@discordjs/builders");

const maps = ["Fracture", "Breeze", "Icebox", "Bind", "Haven", "Split", "Ascent"]
const primaryRifle = ["Phantom", "Vandal"]
const primaryWeapons = ["Ares", "Odin", "Marshal", "Operator", "Bulldog", "Guardian", "Bucky", "Judge", "Stinger", "Spectre", "Phantom", "Vandal"]
const secondary = ["Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"]
const agents = ["Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Reyna", "Raze", "Breach", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", ]
const roles = ["Controller", "Sentinel", "Initiator", "Duelist"]
const weapons = ["Phantom", "Vandal", "Ares", "Odin", "Marshal", "Operator", "Bulldog", "Guardian", "Bucky", "Judge", "Stinger", "Spectre", "Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"]
module.exports = {
	data: new SlashCommandBuilder()
		.setName("random")
		.setDescription("Valorant Randomizer Command")
		.addStringOption((option) =>
			option
				.setName("type")
				.setDescription("Choose from agent, role, weapon, map, rifle, primary, and secondary")
				.setRequired(true)
		),
	async execute(interaction) {
		if (interaction.options.getString("type") === "agent") {
			interaction.reply({
				content: "**Your random agent is:** "+agents[Math.floor(Math.random()*agents.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "role") {
			interaction.reply({
				content: "**Your random role is:** "+roles[Math.floor(Math.random()*roles.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "weapon") {
			interaction.reply({
				content: "**Your random weapon is:** "+weapons[Math.floor(Math.random()*weapons.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "map") {
			interaction.reply({
				content: "**Your random map is:** "+maps[Math.floor(Math.random()*maps.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "rifle") {
			interaction.reply({
				content: "**Your random Primary Rifle is:** "+primaryRifle[Math.floor(Math.random()*primaryRifle.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "primary") {
			interaction.reply({
				content: "**Your random Primary Weapon is:** "+primaryWeapons[Math.floor(Math.random()*primaryWeapons.length)],
				ephemeral: false,
			});
		} else if (interaction.options.getString("type") === "secondary") {
			interaction.reply({
				content: "**Your random Secondary Weapon is:** "+secondary[Math.floor(Math.random()*secondary.length)],
				ephemeral: false,
			});
		} else {
			interaction.reply({
				content: "Please enter a valid type",
				ephemeral: false,
			});
		}
		
	},
};
