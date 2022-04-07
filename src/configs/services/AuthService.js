import axios from 'axios'
import { URL } from '../api'

const auth = axios.create({ baseURL: URL })

const Login = (data) => {
    return auth.post(`/Auth/Login`, data)
}

let AuthService = {
    Login
}
export default AuthService