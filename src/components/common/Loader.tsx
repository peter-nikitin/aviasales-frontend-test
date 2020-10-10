import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  modal: {
    width: "40px",
    height: "40px",
    position: "fixed",
    animation: "$sk-chase 2.5s infinite linear both",
  },
  "sk-chase-dot": {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    animation: "$sk-chase-dot 2.0s infinite ease-in-out both",
    "&:before": {
      content: '""',
      display: "block",
      width: "25%",
      height: "25%",
      backgroundColor: "#2196F3",
      borderRadius: "100%",
      animation: "$sk-chase-dot-before 2.0s infinite ease-in-out both",
    },

    "&:nth-child(1)": { animationDelay: "-1.1s" },
    "&:nth-child(2)": { animationDelay: "-1.0s" },
    "&:nth-child(3)": { animationDelay: "-0.9s" },
    "&:nth-child(4)": { animationDelay: "-0.8s" },
    "&:nth-child(5)": { animationDelay: "-0.7s" },
    "&:nth-child(6)": { animationDelay: "-0.6s" },
    "&:nth-child(1):before": { animationDelay: "-1.1s" },
    "&:nth-child(2):before": { animationDelay: "-1.0s" },
    "&:nth-child(3):before": { animationDelay: "-0.9s" },
    "&:nth-child(4):before": { animationDelay: "-0.8s" },
    "&:nth-child(5):before": { animationDelay: "-0.7s" },
    "&:nth-child(6):before": { animationDelay: "-0.6s" },
  },
  "@keyframes sk-chase": {
    "100%": { transform: "rotate(360deg)" },
  },

  "@keyframes sk-chase-dot": {
    "80%, 100%": { transform: "rotate(360deg)" },
  },

  "@keyframes sk-chase-dot-before": {
    "50%": {
      transform: "scale(0.4)",
    },
    "100%, 0%": {
      transform: "scale(1.0)",
    },
  },
});

const Loader: React.FunctionComponent = () => {
  const style = useStyle();
  return (
    <div className={style.modal}>
      <div className={style["sk-chase-dot"]} />
      <div className={style["sk-chase-dot"]} />
      <div className={style["sk-chase-dot"]} />
      <div className={style["sk-chase-dot"]} />
      <div className={style["sk-chase-dot"]} />
      <div className={style["sk-chase-dot"]} />
    </div>
  );
};

export default Loader;
