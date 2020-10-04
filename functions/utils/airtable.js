const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.API_KEY,
});

const base = Airtable.base(process.env.BASE_ID);
const table = base(process.env.Table);

const getHighScores = async (filterEmptyRecords) => {
  let queryOptions = { sort: [{ field: "score", direction: "desc" }] };
  if (filterEmptyRecords) queryOptions["filterByFormula"] = "NOT({name} = '')";
  const records = await table.select(queryOptions).firstPage();
  return records.map(({ id, fields }) => ({
    id,
    fields,
  }));
};

module.exports = {
  table,
  getHighScores,
};
