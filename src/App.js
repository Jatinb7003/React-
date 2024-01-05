import React from 'react';
import './App.css';
import FirstComponent from './todo'; // Import kiya hua component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent /> {/* Pehla component yahan render kia */}
      </header>
    </div>
  );
}

export default App;