import { conf } from "../config/api.conf"

export const getSearchDetail = (resource:string) => {
  return fetch(`${conf.URL}/nodes/${resource}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}