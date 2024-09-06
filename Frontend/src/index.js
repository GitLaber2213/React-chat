import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireThree = (state) => {
    root.render(
        <React.StrictMode>
                <App store={store}/>
        </React.StrictMode>
    )
}

rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state);
});