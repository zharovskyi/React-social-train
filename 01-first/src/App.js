import React from 'react';
// import Header from '/co'
import './App.css';
import Header from './components/Header';


const App = () => {
  return(
    <div className="app-wrapper">
      <Header />
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
          <img className='about-foto' src='https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477_960_720.png' alt='Logo'/>
          <div className='about_content'>
            <h2 className='about_date'>Name: Vasyl Pupkin</h2>
            <p className='about_date'>Date of Birth</p>
            <p className='about_city'>City: Ivano-Frankivsk</p>
            <p className='about_education'>Education: IFTUOG</p>
            <p className='about_info'>Web-site: www.oleh.ua</p>
          </div>
        </div>
        <div className='search_block'>
        <h3>My Posts</h3>
        <div className='search_input'>
          <input className='search_button' type='text'/>
          <input className='send_button' type='button' value="Send"/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default App;
