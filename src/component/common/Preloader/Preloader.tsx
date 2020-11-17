import React from "react";
import preloader from "../../../assets/images/loading.svg";
import style from "./Preloader.module.css";

type PreloaderType ={
  //file ts
}

let Preloader:React.FC<PreloaderType> = () => {
  return (
    <div className={style.block__preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
