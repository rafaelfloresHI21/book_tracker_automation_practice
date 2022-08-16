
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

export const getData = async () => {
  const config = {
    method: 'get',
    url: process.env.MOCK_API,
    headers: {
      'X-API-Key': process.env.API_KEY
    },
  };

  return await axios(config)
} 
