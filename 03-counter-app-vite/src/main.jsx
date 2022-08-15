import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
import FirstApp from './FirstApp';
import { App } from './HelloWorldApp';


import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={123}  />
        {/* <FirstApp title="Hola, soy Vegeta" /> */}
    </React.StrictMode>
);

