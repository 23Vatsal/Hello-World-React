import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="BatMan">
        <p>This is children props.</p>
      </Greet>
      <Greet name="Tony" heroName="IronMan"/> */}
      {/* <Welcome/>  */}
      {/* <Hello/> */}
      
    </div>
  );
}

export default App;
