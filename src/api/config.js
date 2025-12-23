import axios from "redaxios"


const BASE_URL = "http://192.168.1.6:8000/api"

const ax = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: false,
})

function setAuthToken(token) {
    if (token) {
        ax.defaults.headers = ax.defaults.headers || {}
        ax.defaults.headers.Authorization = `Bearer ${token}`
    } else {
        if (ax.defaults.headers) delete ax.defaults.headers.Authorization
    }
}

export { ax ,setAuthToken }