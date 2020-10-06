import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

import {
  FilterArray,
  Filter,
  SelectedFiltersArray,
} from "../data/filtersTypes";

import selected from "../assets/selected.svg";

interface FiltersSelection {
  handleFilterChange: (clickedFilter: string) => void;
  selectedFilters: SelectedFiltersArray;
  filtersArray: FilterArray;
}

const useStyle = createUseStyles({
  filtersList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  header: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 1.2,
    padding: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 10,
    },
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#4A4A4A",
  },
  filtersElement: {
    padding: {
      left: 20,
      top: 10,
      bottom: 10,
    },
    border: "none",
    background: "none",
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: 13,
    "&:hover": {
      backgroundColor: "#F1FCFF",
    },
    "&:before": {
      content: '""',
      border: "1px solid #9ABBCE",
      borderRadius: 2,
      width: 20,
      height: 20,
      display: "block",
      margin: {
        right: 10,
      },
    },
  },
  checked: {
    "&:before": {
      backgroundImage: `url(${selected})`,
      backgroundPosition: "center",
      border: "1px solid #2196F3",
      backgroundRepeat: "no-repeat",
    },
  },
  filtersBlock: {
    width: 232,
    background: "#FFFFFF",
    boxShadow: " 0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    marginRight: 20,
  },
});

const FiltersSelection: FunctionComponent<FiltersSelection> = ({
  handleFilterChange,
  selectedFilters,
  filtersArray,
}: FiltersSelection) => {
  const style = useStyle();

  return (
    <div className={style.filtersBlock}>
      <div className={style.header}>Количество пересадок</div>
      <ul className={style.filtersList}>
        {filtersArray.map((filter: Filter) => (
          <li key={filter.id}>
            <button
              id={filter.id}
              type="button"
              className={`${style.filtersElement} ${
                selectedFilters.includes(filter) && style.checked
              }`}
              onClick={() => {
                handleFilterChange(filter.id);
              }}
            >
              {filter.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersSelection;
