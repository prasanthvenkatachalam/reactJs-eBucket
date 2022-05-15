import React from "react";
import classes from "../Loader/Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.overlay__inner}>
        <div className={classes.overlay__content}>
          <span className={classes.spinner}></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
