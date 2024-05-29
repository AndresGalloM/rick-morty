type ResponseRegister = {
  error: string | null
  payload: {
    name?: string
  }
}

type ResponseLogin = {
  error: string | null
  payload: {
    token?: string
  }
}

export type User = {
  name: string
  password: string
}

export type RegisterUser = (user: User) => Promise<ResponseRegister>
export type LoginUser = (user: User) => Promise<ResponseLogin>

export type UserContext = {
  jwt: string | null
  setJwt: React.Dispatch<React.SetStateAction<string | null>>
}
