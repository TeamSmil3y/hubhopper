import {
  createBrowserRouter,
  BrowserRouter
} from "react-router-dom";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

import './App.css'
import {Rides} from "./pages/Rides";

import {get_hubs} from "./features/api/api";
import {currentUser} from "./state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rides />
  }
]);

const users = [
  {
    email: 'hkleinber3s@ucoz.ru',
    password: 'password'
  },
  {
    email: 'nbroggiorm@mail.ru',
    password: 'password'
  }
]

function App() {
  const [user, setUser] = useRecoilState(currentUser)
  useQuery('hubs', get_hubs)

  return (
    <div>
      <div style={{ position: "fixed", top: 5, right: 5, zIndex: 10000 }}>
        <button onClick={() => setUser(users[0])}>1</button>
        <button onClick={() => setUser(users[1])}>2</button>
      </div>
      <BrowserRouter>
        <Rides />
      </BrowserRouter>
    </div>
  )
}

export default App
