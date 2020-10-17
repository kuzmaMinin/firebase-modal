import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcCSWbNQUoyx6qO3qWLowPd7gks5RLKo0",
    authDomain: "fir-test-project-2a128.firebaseapp.com",
    databaseURL: "https://fir-test-project-2a128.firebaseio.com",
    projectId: "fir-test-project-2a128",
    storageBucket: "fir-test-project-2a128.appspot.com",
    messagingSenderId: "501814001255",
    appId: "1:501814001255:web:0c95bd0019ceda1da25ec2"
}

firebase.initializeApp(firebaseConfig)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
