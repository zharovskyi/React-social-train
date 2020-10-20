import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redax/state';
import { addPost, updateNewPostText } from './redax/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderTree(state);
subscribe(rerenderTree);