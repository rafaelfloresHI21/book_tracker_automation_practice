import General from '../General';

const axios = require('axios');

var logindata = JSON.stringify({
  "email": General.email
});


export const confirmUser = async () => {
  const config = {
    method: 'post',
    url: 'https://suma-wealth-api-staging.herokuapp.com/profile/confirm_by_email',
    headers: {
      'Content-Type': 'application/json'
    },
    data: logindata
  };

  return axios(config)
}
