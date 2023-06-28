import React, { MouseEventHandler } from "react";
// import "./syles.css";

const Button = ({onClick, label}:{onClick: () => void, label: String}) => {
    return <button className="button" type="submit" onClick={onClick}>{ label }</button>
};


export default Button;