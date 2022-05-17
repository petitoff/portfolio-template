import React from 'react';
import './Footer.css';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>
        PETITOFF
      </a>

      <ul className='permalinks'>
        <li>
          <a href='/#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/petitoff'>
          <AiFillGithub />
        </a>
        <a href='https://github.com/petitoff'>
          <AiFillGithub />
        </a>
        <a href='https://github.com/petitoff'>
          <FaFacebookF />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; petitoff. Create with {'❤'}</small>
      </div>
    </footer>
  );
};

export default Footer;
