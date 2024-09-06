import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import MainComponentContainer from './Components/MainComponent/MainComponentContainer';

function App(props) {
  return (
    <div className='App'>
      <Provider store={props.store}>
        <MainComponentContainer />
      </Provider>
    </div>
  );
}


export default App;
