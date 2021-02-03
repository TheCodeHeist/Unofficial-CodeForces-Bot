const Discord = require("discord.js");
const fetch = require("node-fetch");
const cfcontests = require("./commands/cfcontests");
const statusroller = require("./commands/statusroller");
const helpdesk = require("./commands/helpdesk");
const { prefix, guild_id, ping_channel_id } = require("./config.json");

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Moi Redi!!");
  console.log(bot.guilds.cache)

  statusroller(bot, prefix);
});

bot.on("message", (message) => {
  let args = message.content.slice(prefix.length).split(" ");

  switch (args[0]) {
    case "help":
      helpdesk(Discord, message);
      break;

    case "contests":
      cfcontests(message, args, fetch);
      break;
  }
});

bot.login(process.env.token);
