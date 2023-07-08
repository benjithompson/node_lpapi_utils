import * as fs from 'fs';

export function FileToListPayload(path){
    const agent_list = fs.readFileSync(path).toString("utf-8").split("\n");
    return JSON.stringify(agent_list);
}

