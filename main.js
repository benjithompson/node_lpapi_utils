import { apiconfig } from "./conf.mjs";
import { GetAllUsers } from "./GetAllUsers.mjs"

function run(){
    GetAllUsers(apiconfig);
}

run()