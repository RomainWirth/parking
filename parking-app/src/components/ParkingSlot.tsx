import React from "react";
import { Parking } from "../App";
// import "./syles.css";

const ParkingSlot = ({place}: {place: Parking}) => {
    return <>{
        place.ticket.map( p => <div key={p} className="pkgSlot">Place n°{p}</div>)
    }</>
};

export default ParkingSlot;