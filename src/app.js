import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import TokyoSalsa from './components/TokyoSalsa';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log("app.js is running");

ReactDOM.render(<AppRouter />, document.getElementById('app'));

