import axios from "axios"

const baseUrl = "http://localhost:8081/api/";

export default class ProductService {
    getProducts(pageNo, pageSize) {
        return axios.get(baseUrl + "products/getallByPage", { params: { pageNo, pageSize } })
    }

    getProductById(id) {
        return axios.get(baseUrl + "products/getById", { params: { id } })
    }
}