import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  return (
    <div>
      <a href='#'>
        <AiOutlineHome />
      </a>
      <a href='#about'>
        <AiOutlineUser />
      </a>
      <a href='#experience'>
        <BsFillJournalBookmarkFill />
      </a>
      <a href='#services'>
        <RiServiceLine />
      </a>
      <a href='#contact'>
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Nav;
