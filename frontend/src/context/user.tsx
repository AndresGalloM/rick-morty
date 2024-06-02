import { UserContext } from '../types/users'
import { createContext, useEffect, useState } from 'react'

const Context = createContext<UserContext>({} as UserContext)

export const UserContextProvider = ({
  children
}: {
  children: JSX.Element[] | JSX.Element
}) => {
  const [jwt, setJwt] = useState<string | null>(
    () => window.localStorage.getItem('token') ?? null
  )

  useEffect(() => {
    console.log(jwt)
  }, [jwt])

  return <Context.Provider value={{ jwt, setJwt }}>{children}</Context.Provider>
}

export default Context
