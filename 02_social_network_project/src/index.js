import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const states = {
    active: 'active',
    inactive: 'inactive'
}

let DialogsData = [
    {name: 'Matteo', id: 1},
    {name: 'Erick', id: 2},
    {name: 'James', id: 3, state : states.active},
    {name: 'Anmary', id: 4},
    {name: 'Janet', id: 5},
    {name: 'Tilek', id: 6},
    {name: 'Mike', id: 7},
    {name: 'Samuel', id: 8},
];

ReactDOM.render(
    <React.StrictMode>
        <App DialogsDate={DialogsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
