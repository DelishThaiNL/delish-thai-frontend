import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

type Params = Record<
  string,
  string | number | boolean | (string | number | boolean)[] | null | undefined
>
type Config = AxiosRequestConfig

const ApiService = {
  init(baseUrl: string): void {
    // configure default API URL as needed, ApiService.init is called in main.ts
    axios.defaults.baseURL = `${baseUrl}/api`
  },

  get<T>(resource: string, params: Params = {}, addConfig?: Config): Promise<AxiosResponse<T>> {
    const config: Config = { withCredentials: false, ...addConfig }
    const queryString = this.createQueryString(params)
    const url = queryString ? `${resource}?${queryString}` : resource

    return axios.get<T>(url, config)
  },

  post<T, D = unknown>(resource: string, data: D, addConfig?: Config): Promise<AxiosResponse<T>> {
    const config: Config = { withCredentials: false, ...addConfig }
    return axios.post<T>(resource, data, config)
  },

  put<T, D = unknown>(resource: string, data: D, addConfig?: Config): Promise<AxiosResponse<T>> {
    const config: Config = { withCredentials: false, ...addConfig }
    return axios.put<T>(resource, data, config)
  },

  delete<T>(resource: string, addConfig?: Config): Promise<AxiosResponse<T>> {
    const config: Config = { withCredentials: false, ...addConfig }
    return axios.delete<T>(resource, config)
  },

  createQueryString(params: Params = {}): string {
    const query = new URLSearchParams()

    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined && item !== null) {
            query.append(`${key}[]`, String(item))
          }
        })
      } else if (value !== undefined && value !== null) {
        query.append(key, String(value))
      }
    }

    return query.toString()
  },
}

export default ApiService
