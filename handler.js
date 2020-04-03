const rug = require('random-username-generator');

export const getUsername = async (event, context) => {

  rug.setSeperator('-');

  const username = rug.generate();

  return {
    statusCode: 200,
    body: JSON.stringify({
      name: username,
    }),
  };
};

