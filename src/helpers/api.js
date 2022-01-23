import axios from "axios";
import { apiUrl } from "../constants/apiConstants";

export const api = async(params)=>{
    return axios({
        method: params.method || 'get',
        url: `${apiUrl}${params.path}`,
        data: params.data
      }).then(response => {
          return {
              data:response.data,
              hasError:false,
              status:'success',
          }
      }).catch(error => {
          const err = JSON.stringify(error?.response.data);
          return {
              data:err,
              hasError:true,
              status:'failed'
          }
      })
}   