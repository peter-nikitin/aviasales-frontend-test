import React from "react";
import { createUseStyles } from "react-jss";

import SortingType from "../data/sortingTypes";

const useStyle = createUseStyles({
  buttons: {
    display: "flex",
    textTransform: "uppercase",
    marginBottom: 20,
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

interface TabsProps {
  selectedTab: string;
  handleTabChange: React.Dispatch<React.SetStateAction<SortingType>>;
}

const Tabs = ({ selectedTab, handleTabChange }: TabsProps) => {
  const style = useStyle();

  return (
    <div className={style.buttons}>
      <button
        className={`${style.tabButton} ${
          selectedTab === "cheapest" && style.selected
        }`}
        onClick={() => handleTabChange("cheapest")}
        type="button"
      >
        Самый дешевый
      </button>
      <button
        className={`${style.tabButton} ${
          selectedTab === "fastest" && style.selected
        }`}
        onClick={() => handleTabChange("fastest")}
        type="button"
      >
        Самый быстрый
      </button>
    </div>
  );
};

export default Tabs;
