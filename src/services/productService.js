import axios from "axios"
export default class ProductService {
    getProducts() {
        return axios.get("http://localhost:5231/api/Products?PageIndex=0&PageSize=30")
    }
    getProductById(productId) {
        return axios.get("http://localhost:5231/api/Products/getbyid?id=" + productId)
    }
}