import { api } from "../helpers/api"

export const signup =async(data) => {
    const params = {
        method:'post',
        path:'/signup',
        data
    }
    const response = await api(params);
    return response;
}