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

export const postProduct = async (event, context, callback) => {

  const client = new Client(dbOptions);
  await client.connect();
  const response = {
    headers: {
      'x-custom-header': 'My Header Value',
    },
  };


  try {
    const {title, description, price} = JSON.parse(event.body);
    console.log(event.body);
    console.log({title, description, price});

    if ((typeof title !== 'string'
         || typeof description !== 'string'
         || typeof price !== 'number')
         || (
           !title || !description || !price
         )
        ) {
      response.statusCode = 400;
      response.body = JSON.stringify({
        message: `Product data is invalid.`
      });
    } else {
      const query = `insert into products (title, description, price) values ('${title}', '${description}',  ${price})`;
      console.log(query);

      const dbResponse = await client.query(query);
      const newproduct = dbResponse.rows[0];
      response.statusCode = 201;
      response.body = JSON.stringify(newproduct);
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
