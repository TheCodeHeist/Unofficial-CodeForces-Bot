module.exports = (message, args, fetch) => {
  const api = "https://www.kontests.net/api/v1/codeforces";

  fetch(api)
    .then((response) => {
      const parsedData = response.json();
      return parsedData;
    })
    .then((data) => {
      // console.log(data);

      var count = 0;

      data.forEach((x) => {
        count++;

        const datas = "**" + count + ".** " + x.name;

        message.channel.send(datas);
      });
    });
};
