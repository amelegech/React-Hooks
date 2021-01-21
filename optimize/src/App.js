import React from 'react';
import './App.css';
import UseEffect from './Components/useEffect';
import Count from './Components/Count';
import NewUser from './Components/NewUser';
import MyUnMount from './Components/MyUnMount';

function App() {
  return (
    <div className="container">
      <span><h3>This is responsive applicationscreen (The color will change based on the size)</h3></span>
      <p>We are learning about React Hooks. Hooks are new featurs added in react 16.8 <br/> which allow you to manage the state without writing class</p>
      <hr/>
      <UseEffect />
      <hr/>
      <Count /> 
      <MyUnMount />
      <hr/>
      <NewUser />
    </div>
  );
}

export default App;
