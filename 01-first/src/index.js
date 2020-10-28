import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redax/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderTree(store.getState());
store.subscribe(rerenderTree);