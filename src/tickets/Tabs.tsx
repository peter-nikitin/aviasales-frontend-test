import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  buttons: {
    display: "flex",
    textTransform: "uppercase",
  },
  tabButton: {
    background: "#FFFFFF",
    border: "1px solid #DFE5EC",
    width: "50%",
    padding: {
      top: 15,
      bottom: 15,
    },
    textAlign: "center",
  },
  selected: {
    background: "#2196F3",
    color: "#FFFFFF",
    border: "1px solid #2196F3",
  },
});

interface IProps {
  selectedTab: string;
  handleTabChange: Function;
}

const Tabs = ({ selectedTab, handleTabChange }: IProps) => {
  const styles = useStyle();

  return (
    <div>
      <button
        className={`${styles.tabButton} ${
          selectedTab === "cheapest" && styles.selected
        }`}
        onClick={() => handleTabChange("cheapest")}
      >
        Самый дешевый
      </button>
      <button
        className={`${styles.tabButton} ${
          selectedTab === "fastest" && styles.selected
        }`}
        onClick={() => handleTabChange("fastest")}
      >
        Самый быстрый
      </button>
    </div>
  );
};

export default Tabs;
