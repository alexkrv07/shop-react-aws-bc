'use strict';
import { readFile } from 'fs/promises';

export const getProductsList = async (event, context, callback) => {

  const productList = JSON.parse(
    await readFile(
      new URL('./productList.json', import.meta.url)
    )
  );

  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header': 'My Header Value',
    },
    body: JSON.stringify(productList),
  };

  callback(null, response);
};
