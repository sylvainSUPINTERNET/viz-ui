import { conf } from "./config/api.conf"

export const createNode = (payload:any): Promise<any> => {
    return fetch(conf.URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload
    })
}