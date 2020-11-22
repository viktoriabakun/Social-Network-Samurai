import preloader from "../../../assets/images/preloader.svg";
import React from "react";

export type PreloaderProps ={

}

let Preloader = (props: PreloaderProps) => {
    return <img src={preloader}/>

}

export default Preloader;