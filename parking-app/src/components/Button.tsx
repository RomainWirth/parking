import React, { MouseEventHandler } from "react";
// import "./syles.css";

const Button = ({onClick}:{onClick: () => void}) => {

    return <button className="ticket" type="submit" onClick={onClick}>Ticket</button>
};

export default Button;