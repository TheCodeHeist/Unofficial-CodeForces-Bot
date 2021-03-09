module.exports = (message, args, fetch) => {
  const api = "https://www.kontests.net/api/v1/codeforces";

  fetch(api)
    .then((response) => {
      const parsedData = response.json();
      return parsedData;
    })
    .then((data) => {
      // console.log(data);

      let count = 0;

      for(let i = 0; i <= data.length; i++ ){
        count++;

        const datas = `**${count}:**
**Name:** ${x.name}
**Registration URL:** ${x.url}
**Name:** ${x.name}
`;

        message.channel.send(datas);
      };
    });
};
