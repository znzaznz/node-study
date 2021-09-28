import axios from 'axios'

export const fetchData = ()=>{
    return axios.get('https://xhsapi.huitun.com/user/currentUser').then(resolve=>{
        return resolve.status
    },reject=>{
        return reject
    })
}