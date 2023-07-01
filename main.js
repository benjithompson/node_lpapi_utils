import 'dotenv/config'
import { GetAllUsers } from "./GetAllUsers.mjs"

function run(){
    console.log(process.env.DOMAIN);
    GetAllUsers(process.env);
}

run()