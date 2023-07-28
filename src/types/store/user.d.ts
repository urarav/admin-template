export interface IUserState {
  token: string | undefined
  name: string | null
  avatar?: string | null
  roles: string[]
}
