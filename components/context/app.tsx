import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}
export const AppContext = React.createContext<any>(null);
export default function AppProvider({children}: Props) {
  const [user, setUser] = React.useState({name:'',email:'',address:'',phonenumber:''});
  return (
    <AppContext.Provider value={{user,setUser}}>
      {children}
    </AppContext.Provider>
  )
}
