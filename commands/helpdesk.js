module.exports = (discord, msg) => {
  const { prefix } = require("./../config.json");

  const help_embed = new discord.MessageEmbed()
    .setColor(0x009929)
    .setTitle("Help Desk - CodeForces Bot By CodeHeist")
    .setDescription("This contains help for CodeForces Bot commands")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/805391763635830786/ada09ddc8bb910782985186e17c175b0.png?size=128"
    )
    .addFields({
      name: `-----------------------
  |    General Helps    |
  -----------------------`,
      value: `**Prefix:** ${prefix}\n
                  **Help Desk:** ${prefix}help\n
                  **Contest Viewer:** ${prefix}contests\n
                  `,
    })
    .setTimestamp()
    .setFooter("**It's Under-development. Please wait for more!**");
  // msg.member.send(help_embed);
  msg.channel.send(help_embed);
};
