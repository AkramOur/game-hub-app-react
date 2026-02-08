import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:8081/api'
});


export interface FetchResponse<T> {
  count: number; 
  results: T[];
}