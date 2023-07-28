import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

function getToken(): string | undefined {
  return Cookies.get(TokenKey)
}

function setToken(value: string): void {
  Cookies.set(TokenKey, value)
}

function removeToken(): void {
  Cookies.remove(TokenKey)
}

export { getToken, setToken, removeToken }
