import type {
    AxiosInterceptorOptions,
} from "axios";

export interface ResponseResult<T = any> {
    data: T,
    code: number
    message?: string,
}


declare module 'axios' {
    interface AxiosInterceptorManager<V> {
        use(onFulfilled?: ((value: V) => ResponseResult | Promise<ResponseResult>) | null, onRejected?: ((error: any) => any) | null, options?: AxiosInterceptorOptions): number;
    }
}
