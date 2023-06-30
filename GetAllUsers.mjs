import axios from "axios";


export function GetAllUsers(rconfig){
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://${rconfig.DOMAIN}/api/account/${rconfig.SITE}/configuration/le-users/users?v=4.0&select=$all`,
    headers: { 
      'Authorization': `Bearer ${rconfig.BEARER}`
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}


