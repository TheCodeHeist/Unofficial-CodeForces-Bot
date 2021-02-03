module.exports = (bot, prefix) => {
  const statuses = [
    `${bot.guilds.cache.size} servers!`,
    `${prefix}help`,
    `${bot.users.cache.size} users!`,
  ];

  let i = 0;

  setInterval(() => {
    bot.user.setActivity(statuses[i], { type: "WATCHING" });

    if (i < statuses.length) {
      i++;
    }

    if (i === statuses.length) {
      i = 0;
    }
  }, 5000);
};
