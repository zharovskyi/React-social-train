import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Navbar />
          <div className='app-wraper-content'>

            <Route path='/dialogs'
              render={() =>
                <DialogsContainer store={props.store} />} />
                
            <Route path='/profile'
              render={() =>
                <Profile
                  store={props.store}
                />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/sidebar' component={Sidebar} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
