import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

import Logo from "./Logo.svg";

const useStyle = createUseStyles({
  header: {
    padding: {
      top: 66,
      bottom: 50,
    },
    textAlign: "center",
  },
});

const Header: FunctionComponent = () => {
  const styles = useStyle();

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Aviasalse - поиск авиабилетов" />
    </header>
  );
};

export default Header;
