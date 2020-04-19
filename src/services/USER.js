import { asyncData, $post } from "@/plugins/axios";

const baseURL = '/users'


export function getUser(id) {
    // 
    const url = baseURL
    return asyncData(`${url}/${id}`)
}

export function getAllUsers() {
    const url = baseURL
    return asyncData(url)
}

export function createUser(params) {
    const url = baseURL
    return $post(url, params)
}

export function updateUser(params) {
    const url = baseURL
    return $post(url, params)
}

export function deleteUser() {
    const url = baseURL
    return $post(url)
}

export function deleteAllUsers(params) {
    const url = baseURL
    return $post(url, params)
}


// 统一形式
export default {
    GET(params) {
        return getUser(params.id)
    },
    POST(params) {
        return createUser(params)
    },
    PUT(params) {
        return updateUser(params)
    },
    PATCH(params) {
        return updateUser(params)
    },
    DELETE(params) {
        return deleteUser(params)
    }
}