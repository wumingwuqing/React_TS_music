import axios, { AxiosInstance } from 'axios'
import type { RequestConfig } from './type'

class Request {
  //单例模式 request实例
  instance: AxiosInstance

  //构造函数
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)

    //添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
    //添加实例拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  //网络请求方法
  request<T = any>(config: RequestConfig<any>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    //返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<T, any>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
  put<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PUT' })
  }
  head<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'HEAD' })
  }
  options<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'OPTIONS' })
  }
}
export default Request
