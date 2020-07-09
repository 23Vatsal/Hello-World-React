import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import WelcomeGreeting from './components/WelcomeGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <WelcomeGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/>  */}
      {/* {<Greet name="Bruce" heroName="BatMan">
        <p>This is children props.</p>
      </Greet> */}
      {/* <Greet name="Tony" heroName="IronMan"/>  */}
      {/* <Welcome name="ABCD" heroName="xyz" /> */}
      {/* <Hello/> */}
      
    </div>
  );
}

export default App;
