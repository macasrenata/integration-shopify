import axios from 'axios';


function api() {
    return axios.create({
        baseURL: 'https://google.com',
        headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': 'your-access-token'
    }
})