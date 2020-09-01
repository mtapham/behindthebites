import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.19.1/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// // <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>,
document.getElementById('root'));

