import { useRoutes } from "react-router-dom";

import { routes } from "../../pages/routes.tsx";

import styles from './styles.module.css'

function App() {
  const route = useRoutes(routes)
  return (
    <div className={styles.global}>
      {route}
    </div>
  )
}

export default App
