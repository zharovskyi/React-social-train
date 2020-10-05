import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ProfileInfo from './components/Profile/ProfileInfo/ProfileInfo';


const App = () => {
  return(
    <BrowserRouter >
      <div className="app-wrapper">
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Navbar />
          <div className='app-wraper-content'>
            <Route path='/profile' component ={ Profile }/>
            <Route path='/dialogs' component ={ Dialogs } />
            <Route path='/news' component ={ News }/>
            <Route path='/music' component ={ Music } />
            <Route path='/settings' component ={ Settings }/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
