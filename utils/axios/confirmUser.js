
const axios = require('axios');

export const getData = async () => {
  const config = {
    method: 'get',
    url: 'https://my.api.mockaroo.com/users.json',
    headers: {
      'X-API-Key': '464e40d0'
    },
  };

  return await axios(config)
} 
