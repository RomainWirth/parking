import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {
  const [place, setPlace] = useState<string>("");
  return (
    <div className="App">
      <span className="heading">Parking-app</span>
      <Button />
    </div>
  );
}

export default App;
