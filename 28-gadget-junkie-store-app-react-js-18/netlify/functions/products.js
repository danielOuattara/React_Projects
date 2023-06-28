//domain/.netlify/functions/products

require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
  //   Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
})
  .base(process.env.AIRTABLE_BASE_ID)
  .table(process.env.AIRTABLE_TABLE_ID);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    console.log("response = ", response);
    return {
      statusCode: 200,
      body: /* JSON.stringify(products) */ "products list",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
