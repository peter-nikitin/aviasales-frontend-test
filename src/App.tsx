import React from "react";
import { createUseStyles } from "react-jss";

import Header from "./common/Header";
import Tickets from "./tickets/Tickets";

const useStyle = createUseStyles({
  App: {},
});

function App() {
  const styles = useStyle();

  return (
    <div className={styles.App}>
      <Header />
      <Tickets />
    </div>
  );
}

export default App;
