import './styles.module.css'
import { useRoutes } from "react-router-dom";
import { routes } from "../../pages/routes.tsx";

function App() {
  const route = useRoutes(routes)
  return (
    <>
      {route}
    </>
  )
}

export default App
