import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redax/state';
import { addPost } from './redax/state';
import { BrowserRouter } from 'react-router-dom';

// addPost('Hello.2 js samuray');

export let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>, document.getElementById('root'));
}


