import axios from "axios";


export function GetAllUsers(env){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://${env.DOMAIN}/api/account/${env.SITE}/configuration/le-users/users?v=4.0&select=$all`,
    headers: { 
      'Authorization': `Bearer ${env.BEARER}`
    }
  };
  console.log(config.url)
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}


