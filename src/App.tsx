import {RouterProvider} from "react-router-dom"
import { mainRoutes } from "./routes/mainRoutes"
import Home from "./components/Block/admin/Home"
import Priority from "./components/Block/admin/Priority"
export const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoutes}/>
      <Home></Home>
    <Priority></Priority>
    </div>
  )
}

export default App