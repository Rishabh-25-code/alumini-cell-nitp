import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"


const useAuth = () => {
  const { user, handleLogin, handleLogout, handleSignUp, refresh } = useContext(AuthContext);

  return { user, handleLogin, handleLogout, handleSignUp, refresh }
}

export default useAuth;