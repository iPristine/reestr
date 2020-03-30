import React, {useState} from 'react';
import './App.css';

import { Provider } from 'mobx-react';


import {propertiesStore} from "./store/properties.store";
import UserProperties from "./components/user-properties/index";

const stores = { propertiesStore };


function App() {

  const addProperty = () => {
  };
  return (
    <Provider {...stores}>
      <div className="App">
        <div className="header">
          <button onClick={()=>{stores.propertiesStore.addProperty({id: 1, name: 'me', value: 'value'})}}>ADD</button>
        </div>
        <UserProperties/>
      </div>
    </Provider>
  );
}

export default App;
