import http from '../axios'
const getProducts=()=>{
 return  http.get('/products')
}

export default {
    getProducts
}