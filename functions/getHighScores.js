const { getHighScores } = require("./utils/airtable");

exports.handler = async (event, context) => {
  try {
    const records = await getHighScores(true);

    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        err: "Failed to query records in  Airtable",
      }),
    };
  }
};
