import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import app from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBsunrLS8iuJMC4MxOuFsZQtCtTYwicXc0",
    authDomain: "timer-4ec33.firebaseapp.com",
    databaseURL: "https://timer-4ec33.firebaseio.com",
    projectId: "timer-4ec33",
    storageBucket: "timer-4ec33.appspot.com",
    messagingSenderId: "1070011963023"
}
app.initializeApp(firebaseConfig)

ReactDOM.render(<BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById('root'));
