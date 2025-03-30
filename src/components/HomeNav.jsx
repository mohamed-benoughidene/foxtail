import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default function HomeNav() {
  
  return (
    <div className='home-nav'>
        <nav className='desk-nav'>
        <Link to={"/"}>
      
      <Logo className='logo'/>
        </Link>
        <input
          hidden
          className="check-icon"
          id="check-icon"
          name="check-icon"
          type="checkbox"
         
        />
          <Link to={"/blog"} >Blog</Link>
      </nav>
    </div>
  );
}
