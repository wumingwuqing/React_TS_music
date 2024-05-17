import type { AxiosRequestConfig } from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
//拦截器类型
export interface Interceptors<
  REQT = InternalAxiosRequestConfig<any>,
  REST = AxiosResponse<any, any>
> {
  // function(config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any>
  requestSuccessFn?: (config: REQT) => REQT
  requestFailureFn?: (err: any) => any
  // function(res: AxiosResponse<any, any>): any
  responseSuccessFn?: (res: REST) => any
  responseFailureFn?: (err: any) => any
}
//配置类型
export interface RequestConfig<
  REQT = InternalAxiosRequestConfig<any>,
  REST = AxiosResponse<any, any>
> extends AxiosRequestConfig<any> {
  interceptors?: Interceptors<REQT, REST>
}
