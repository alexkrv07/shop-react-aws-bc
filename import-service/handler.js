const AWS = require('aws-sdk');
const csvParser = require('csv-parser');
const BUCKET = 'aws-node-task5';
// 'use strict';



module.exports = {
  // thumbnailsList: async function() {
  //   const s3 = new AWS.S3({ region: 'eu-west-1' });
  //   let statusCode = 200;
  //   let body = {};
  //   let thumbnails = [];
  //   const params = {
  //     Bucket: BUCKET,
  //     Prefix: 'thumbnails/',
  //     Delimiter: '/'
  //   };

  //   try {
  //     const s3Reasponse = await s3.listObjectsV2(params).promise();
  //     thumbnails = s3Reasponse.Contents;
  //     body = JSON.stringify(
  //       thumbnails
  //         .filter(thumbnail => thumbnail.Size)
  //         .map(thumbnail => `https://${ BUCKET }.s3.amazonaws.com/${ thumbnail.Key }`)
  //     );
  //   } catch (error) {
  //     console.error('Error appears:');
  //     console.error(error);
  //     statusCode = 500;
  //     body = error;
  //   }

  //   return {
  //     statusCode,
  //     headers: { 'Access-Control-Allow-Origin': '*' },
  //     body,
  //   };
  // },

  // imageUpload: async function(event) {
  //   const s3 = new AWS.S3({ region: 'eu-west-1' });

  //   for (const record of event.Records) {
  //     await s3.copyObject({
  //       Bucket: BUCKET,
  //       CopySource: BUCKET + '/' + record.s3.object.key,
  //       Key: record.s3.object.key.replace('images', 'thumbnails')
  //     }).promise();

  //     await s3.deleteObject({
  //       Bucket: BUCKET,
  //       Key: record.s3.object.key
  //     }).promise();

  //     console.log('Thumbnails for an image' + record.s3.object.key.split('/')[1] + ' is created');
  //   }

  //   return {
  //     statusCode: 202,
  //   }
  // },

  importProductsFile: async function(event) {
    const s3 = new AWS.S3({ region: 'eu-west-1' });
    let statusCode = 200;
    let body = {};
    const pathToFile = event.queryStringParameters.name;
    const catalogPath = `uploaded/${pathToFile}`;

    const params = {
      Bucket: BUCKET,
      Key: catalogPath,
      Expires: 60,
      ContentType: 'text/csv',
    };

    try {
      const signedURL = await new Promise((reject, resolve) => {
        return  s3.getSignedUrl('putObject', params, (err, url) => {
          if (err || !url) {
            console.log('My Error');
            reject(err);
          }
          console.log(url)

          resolve(url);
        });
      });

        console.log('signedURL: ', signedURL);
        body = JSON.stringify({signedURL});

    } catch (error) {
      console.error('Error appears:');
      console.error(error);
      statusCode = 500;
      body = error;
    }

    return {
      statusCode,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body,
    };
  },

  importFileParser: async function(event) {
    const s3 = new AWS.S3({ region: 'eu-west-1' });
    let statusCode = 202;
    let body = {};

    for (const record of event.Records) {

      try {
        const params = {
          Bucket: BUCKET,
          Key: record.s3.object.key,
        };
        // const s3Stream = s3.getObject(params).createReadStream();
        const s3Stream = s3.getObject(params).createReadStream();
        await new Promise((resolve, reject) => {
          s3Stream
            .pipe(csvParser())
            .on('data', (chunk) => {
              console.log(chunk);
            })
            .on('error', (err) => {
              reject(err);
            })
          .on('end', async () => {
            console.log(`Copy from ${BUCKET}/${record.s3.object.key} to ${BUCKET}/${record.s3.object.key.replace('uploaded', 'parsed')}`);

            await s3.copyObject({
              Bucket: BUCKET,
              CopySource: BUCKET + '/' + record.s3.object.key,
              Key: record.s3.object.key.replace('uploaded', 'parsed')
            }).promise();

            await s3.deleteObject({
              Bucket: BUCKET,
              Key: record.s3.object.key
            }).promise();

            resolve(() => {});
          });
        });

      } catch (error) {
        console.error('Error appears:');
        console.error(error);
        statusCode = 500;
        body = error;
      }
    }



    // for (const record of event.Records) {
    //   await s3.copyObject({
    //     Bucket: BUCKET,
    //     CopySource: BUCKET + '/' + record.s3.object.key,
    //     Key: record.s3.object.key.replace('uploaded', 'parsed')
    //   }).promise();

    //   await s3.deleteObject({
    //     Bucket: BUCKET,
    //     Key: record.s3.object.key
    //   }).promise();

    //   console.log('Thumbnails for an image' + record.s3.object.key.split('/')[1] + ' is created');
    // }

    return {
      statusCode,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body,
    }
  },

}
