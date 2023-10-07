import { ReactElement } from "react";
import { useRoutes } from "react-router-dom";

import { Header } from "../Header/Header.tsx";
import { routes } from "../../pages/routes.tsx";
import { Footer } from "../Footer/Footer.tsx";

import styles from './styles.module.css'

function App(): ReactElement {
  const route = useRoutes(routes);

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
