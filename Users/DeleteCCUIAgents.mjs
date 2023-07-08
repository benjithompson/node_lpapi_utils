
import axios from 'axios';
import 'dotenv/config'
import {FileToListPayload} from '../Utils/ReadFileToPayload.js'

export function DeleteAgents(path){

  const agentList = FileToListPayload(path)
  
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `https://${process.env.DOMAIN}/api/account/${process.env.SITE}/configuration/le-users/users?v=4.0`,
    headers: { 
      'If-Match': '-1', 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.BEARER}`
    },
    data : agentList
  };
  
  axios.request(config)
  .then((response) => {
    console.log(response.status)
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });  
}
