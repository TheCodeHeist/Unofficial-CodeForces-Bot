const Discord = require("discord.js");
const fetch = require("node-fetch");
const cfcontests = require("./commands/cfcontests");
const { token, prefix, guild_id, ping_channel_id } = require("./config.json");

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Moi Redi!!");
});

bot.on("message", (message) => {
  let args = message.content.slice(prefix.length).split(" ");

  switch (args[0]) {
    case "contests":
      cfcontests(message, args, fetch);
      break;
  }
});

bot.login(token || process.env.token);
