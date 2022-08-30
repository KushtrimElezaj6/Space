import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function apiRequest<D = {}, R = unknown>({
  url,
  method,
  data,
  headers,
  params,
  responseType,
}: AxiosRequestConfig<D>) {
  return await Axios.request<D, AxiosResponse<R>>({
    url: `${process.env.REACT_APP_JSON_PLACEHOLDER_API}/${url}`,
    method,
    data,
    headers,
    params,
    responseType,
  });
}
