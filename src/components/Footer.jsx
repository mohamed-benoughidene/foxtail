import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { ReactComponent as Logo } from '../assets/logo-light.svg';
export default function Footer() {
    const iconStyle = {
        color: '#fff',
    }
  return (
    <footer className='footer'>


<div className="footer__content">
    <div>
    <Link to={'/'}><Logo className='footer__logo'/></Link>

    </div>

    <ul className='footer__socials'>
        <li><Link to={'/'}>
        <FaSquareInstagram className='icon'
        style={iconStyle}
        size={46}
        />
        </Link>
        </li>
        <li>
            <Link to={'/'}>
        <AiFillTikTok className='icon'
        style={iconStyle}
        size={50}
        />
        </Link>
        </li>
    </ul>
</div>
<div className="footer__copyright">
    <p>&copy; {new Date().getFullYear()} Foxtail. All rights reserved.</p>
</div>
    </footer>
  )
}
