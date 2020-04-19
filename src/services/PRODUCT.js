import { asyncData, $post } from "@/plugins/axios";

const baseURL = '/products'


export function queryProduct(id) {
    // 
    const url = baseURL
    return asyncData(`${url}/${id}`)
}

export function queryAllProducts() {
    const url = baseURL
    return asyncData(url)
}

export function createProduct(params) {
    const url = baseURL
    return $post(url, params)
}

export function updateProduct(params) {
    const url = baseURL
    return $post(url, params)
}

export function deleteProduct() {
    const url = baseURL
    return $post(url)
}

export function deleteAllProducts(params) {
    const url = baseURL
    return $post(url, params)
}


// 统一形式
export default {
    GET(params) {
        return queryProduct(params.id)
    },
    POST(params) {
        return createProduct(params)
    },
    PUT(params) {
        return updateProduct(params)
    },
    PATCH(params) {
        return updateProduct(params)
    },
    DELETE(params) {
        return deleteProduct(params)
    }
}