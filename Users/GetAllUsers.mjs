import axios from "axios";
import 'dotenv/config'

export async function GetAllUsers(){
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://${process.env.DOMAIN}/api/account/${process.env.SITE}/configuration/le-users/users?v=4.0&select=$all`,
    headers: { 
      'Authorization': `Bearer ${process.env.BEARER}`
    }
  };

  axios.request(config)
  .then((response) => {
     return response.data 
  })
  .catch((error) => {
    console.log(error);
  });
}
