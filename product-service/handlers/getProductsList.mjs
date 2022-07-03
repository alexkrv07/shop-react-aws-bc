'use strict';
import pkg from 'pg';
const { Client } = pkg;


const {PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnathorised: false
  },
  connectionTimeoutMillis: 500
};

export const getProductsList = async (event, context, callback) => {

  const client = new Client(dbOptions);
  await client.connect();
  const response = {
    headers: {
      'x-custom-header': 'My Header Value',
    },
  };

  try {
    const query = 'select products.id, products.title, products.description, products.price, stocks.count from products left join stocks on products.id = stocks.product_id'
    console.log(query);

    const dbResponse = await client.query(query);
    const productList = dbResponse.rows;
    response.statusCode = 200;
    response.body = JSON.stringify(productList);

  } catch (err) {
    response.statusCode = 500;
    response.body = JSON.stringify({ error: 'Error during database request executing'});
    console.log(err?.message);

  } finally {
    client.end();
    return response;
  }
};
