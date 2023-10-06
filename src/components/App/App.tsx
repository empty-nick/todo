import { useRoutes } from "react-router-dom";

import { routes } from "../../pages/routes.tsx";

import styles from './styles.module.css'
import { Header } from "../Header/Header.tsx";
import { Footer } from "../Footer/Footer.tsx";

function App() {
  const route = useRoutes(routes)
  console.log(styles.content)
  return (
    <div className={styles.global}>
      <Header style={styles.header} />
      <div className={styles.content}>
        {route}
      </div>
      <Footer style={styles.footer} />
    </div>
  )
}

export default App
