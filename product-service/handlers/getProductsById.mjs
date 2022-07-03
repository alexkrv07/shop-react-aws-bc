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

export const getProductsById = async (event, context, callback) => {
  const productId = event.pathParameters.productId;
  const client = new Client(dbOptions);
  await client.connect();
  const response = {
    headers: {
      'x-custom-header': 'My Header Value',
    },
  };

  try {
    const query = `select p.id, p.title, p.description, p.price, s.count from products p, stocks s where p.id = '${productId}' and p.id = s.product_id`;
    console.log(query);

    const dbResponse = await client.query(query);
    const productById = dbResponse.rows[0];
    if (!productById) {
      response.statusCode = 404;
      response.body = JSON.stringify({
        message: `Product with id = ${productId} doesn't exist.`
      });
    } else {
      response.statusCode = 200;
      response.body = JSON.stringify(productById);
    }


  } catch (err) {
    response.statusCode = 500;
    response.body = JSON.stringify({ error: 'Error during database request executing'});
    console.log(err?.message);

  } finally {
    client.end();
    return response;
  }

};
