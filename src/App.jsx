import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./component/profile";
import Logout from "./component/logout";
import Login from "./component/login";
function App() {
  return (
    <main>
    <Login />
    <Logout />
    <Profile />
    </main>
  )
}

export default App
