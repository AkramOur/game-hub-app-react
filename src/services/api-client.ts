import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8081/api",
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getById = (id: number | string) => {
    return apiClient.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  };
}
