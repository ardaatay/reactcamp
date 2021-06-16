import axios from "axios"

const baseUrl = "http://localhost:8081/api/";

export default class CategoryService {
    getCategories() {
        return axios.get(baseUrl + "categories/getall")
    }
}