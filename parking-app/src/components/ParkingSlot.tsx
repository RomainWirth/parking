import React from "react";
import { ParkingPlace } from "../App";
import Button from "./Button";
// import "./syles.css";

const ParkingSlot = ({ parkingPlaces, handleReleaseCar }: { parkingPlaces: ParkingPlace[], handleReleaseCar: (id:number) => void }) => {
    return <>{
        parkingPlaces.map(p =>
            <div key={p.id} className="pkgSlot">
                <p>Place n°{p.id}</p>
                { p.occupied && <Button onClick={ () => handleReleaseCar(p.id)} label="libérer" /> }
            </div>
        )
    }</>
};

export default ParkingSlot;