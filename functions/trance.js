require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appnKAZ1lLzauio4G')
  .table('asottrance');

exports.handler = async (event, context, cb) => {


  try {
    const { records } = await airtable.list();

    const songs = records.map((song) => {
      const { id } = song;

      const { name, singer, musicSrc, cover } = song.fields;

      return { id, name, singer, musicSrc, cover };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(songs),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'server error',
    };
  }
};
