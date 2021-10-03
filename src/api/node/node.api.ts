import { conf } from "../config/api.conf"
import { INodeCreate } from "./INodeCreate"

export const createNode = (payload:INodeCreate, resource:string): Promise<any> => {
    return fetch(`${conf.URL}/${resource}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}