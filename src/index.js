import React from 'react';
import store from './redux/store'
import '../src/assets/css/style.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from 'react-redux'
import {render} from "react-dom";



const root = document.getElementById('root')
render(
    <BrowserRouter>
       <Provider store={store}>
           <App/>
       </Provider>
    </BrowserRouter>, root
);

