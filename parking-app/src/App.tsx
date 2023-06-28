import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ParkingSlot from './components/ParkingSlot';

export interface ParkingPlace {
  id: number;
  occupied: boolean;
}


const App: React.FC = () => {
  const [parkingPlaces, setParkingPlaces] = useState<ParkingPlace[]>(
    [
      {
        id: 1,
        occupied: false
      },
      {
        id: 2,
        occupied: false
      },
      {
        id: 3,
        occupied: false
      },
      {
        id: 4,
        occupied: false
      }
    ]
  );

  const handleParkCar = () => {
    const newParkingPlaces = [...parkingPlaces];
    const availablePlace = newParkingPlaces.find(place => !place.occupied);

    if (availablePlace) {
      availablePlace.occupied = true;
      setParkingPlaces(newParkingPlaces);
    }
  };

  const handleReleaseCar = (placeId: number) => {
    const newParkingPlaces = [...parkingPlaces];
    const placeToRelease = newParkingPlaces.find(place => place.id === placeId);

    if (placeToRelease) {
      placeToRelease.occupied = false;
      setParkingPlaces(newParkingPlaces);
    }
  };

  return (
    <div className="App">
      <span className="heading">Parking-app</span>
      <Button onClick={handleParkCar} label={"ticket"}/>
      <div className="pkgSlotContainer">
        <ParkingSlot parkingPlaces={ parkingPlaces } handleReleaseCar={handleReleaseCar}/>
      </div>
    </div>
  );
}

export default App;
