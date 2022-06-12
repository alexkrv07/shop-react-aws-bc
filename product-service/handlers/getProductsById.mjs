'use strict';
import { readFile } from 'fs/promises';

export const getProductsById = async (event, context, callback) => {

  const productList = JSON.parse(
    await readFile(
      new URL('./productList.json', import.meta.url)
    )
  );

  let response = {};

  const productId = event.pathParameters.productId;

  if (productId === '') {
    response = {
      statusCode: 200,
      headers: {
        'x-custom-header': 'My Header Value',
      },
      body: JSON.stringify(productList),
    };
  } else {
    const productInfo = productList.find(product => product.id === productId);

    if (!productInfo) {
      response = {
        statusCode: 404,
        headers: {
          'x-custom-header': 'My Header Value',
        },
        body: JSON.stringify(`Product with id = ${productId} not found.`),
      }
    } else {
      response = {
        statusCode: 200,
        headers: {
          'x-custom-header': 'My Header Value',
        },
        body: JSON.stringify(productInfo),
      };
    }
  }

  callback(null, response);
};
