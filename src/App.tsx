import React from "react";
import { createUseStyles } from "react-jss";

import Header from "./components/common/Header";
import TicketsComponent from "./components/tickets/TicketsComponent";

const useStyle = createUseStyles({
  App: {},
});

const App: React.FunctionComponent = () => {
  const styles = useStyle();

  return (
    <div className={styles.App}>
      <Header />
      <TicketsComponent />
    </div>
  );
};

export default App;
