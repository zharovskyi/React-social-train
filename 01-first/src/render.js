import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redax/state';
import { BrowserRouter } from 'react-router-dom';

// addPost('Hello.2 js samuray');

export let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}


