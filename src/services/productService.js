import axios from "axios"

export default class ProductService {
    getProducts(pageNo, pageSize) {
        return axios.get("http://localhost:8081/api/products/getallByPage", { params: { pageNo: pageNo, pageSize: pageSize } })
    }
}