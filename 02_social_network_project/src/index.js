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

let MessagesData = [
    {content: 'Morning', id: 1},
    {content: 'Call in 5 mins?', id: 2},
    {content: 'OK', id: 3},
]

let PostsData = [
    {id: 1, title: 'React vs Vue: What is the best choice for 2021?', likes: 78},        
    {id: 2, title: 'Isolated React component development environment with a living style guide', likes: 183},        
    {id: 3, title: 'GRID: A simple visual cheatsheet for CSS Grid Layout', likes: 1721},        
]

ReactDOM.render(
    <React.StrictMode>
        <App DialogsData={DialogsData} MessagesData={MessagesData} PostsData={PostsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
