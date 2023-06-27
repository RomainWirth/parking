import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ParkingSlot from './components/ParkingSlot';

export class Parking {

  _tickets:number[];

  constructor(tickets:number[] = []) {
    this._tickets = tickets
  }

  addTicket(): Parking {
    return new Parking([... this._tickets, this._tickets.length])
  }

  public get ticket() {
    return this._tickets;
  }

  
}

const App: React.FC = () => {
  const [place, setPlace] = useState<Parking>(new Parking());
  console.log(place);
  return (
    <div className="App">
      <span className="heading">Parking-app</span>
      <Button onClick={ () => {
        setPlace(place.addTicket())
      } }/>
      <div className="pkgSlotContainer">
        <ParkingSlot place={ place }/>
      </div>
    </div>
  );
}

export default App;
