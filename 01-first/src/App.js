import React from 'react';
import './App.css'


const App = () => {
  return(
    <div className="app-wrapper">
      <header className='header'>
        <img src="https://www.freelogodesign.org/file/app/client/thumb/3a369f74-3c97-4d8d-8413-0747487cc7aa_200x200.png?1600875219334" alt="logo"/>
      </header>
      <nav className='nav'>
        <div className='nav-item'>
          <a>Profile</a>
        </div> 
        <div className='nav-item'>
          <a>Message</a>
        </div>
        <div className='nav-item'>
          <a>News</a>
        </div>
        <div className='nav-item'>
          <a>Music</a>
        </div>
        <div className='nav-item'>
          <a>Contents</a>
        </div>
        <div className='nav-item settings'>
          <a>Settings</a>
        </div>     
      </nav>
      <div className='content'>
        <div className="content-img">
          <img src="https://images.freeimages.com/images/large-previews/43f/beach-1408077.jpg" alt="logo"/>
        </div>
        <div className='contnet-about'>
          <div className='about-foto'></div>
        </div>
      </div>
    </div>
  )
}

export default App;
