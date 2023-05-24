import network from '@/network'

export function login<T>(data: any) {
    return network.post<T>('api/user/login', data)
}

export function getUserInfo<T>() {
    return network.get<T>('api/user/userInfo')
}