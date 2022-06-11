require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const maps = ["Fracture", "Breeze", "Icebox", "Bind", "Haven", "Split", "Ascent"]
const primaryRifle = ["Phantom", "Vandal"]
const primaryWeapons = ["Ares", "Odin", "Marshal", "Operator", "Bulldog", "Guardian", "Bucky", "Judge", "Stinger", "Spectre"]
const secondary = ["Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"]
const agents = ["Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Reyna", "Raze", "Breach", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", ]
const roles = ["Controller", "Sentinel", "Initiator", "Duelist"]

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === ".valmap") {
    msg.reply("pong");
  }
})
client.on("message", msg => {
  if (msg.content === ".valweapon") {
    msg.reply("bang");
  }
})
client.on("message", msg => {
  if (msg.content === ".valagent") {
    msg.reply("bang");
  }
})
client.on("message", msg => {
  if (msg.content === ".valrole") {
    msg.reply("bang");
  }
})
client.login(process.env.DISCORD_TOKEN);