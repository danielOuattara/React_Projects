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

    const products = response.records.map((item) => {
      const { id, fields } = item;

      const {
        category,
        colors,
        company,
        description,
        featured,
        images,
        name,
        price,
        shipping,
      } = fields;

      const { url } = images[0];

      return {
        category,
        colors,
        company,
        description,
        featured,
        id,
        image: url,
        name,
        price,
        shipping,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
