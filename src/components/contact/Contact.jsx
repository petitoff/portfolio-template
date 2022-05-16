import React from 'react';
import './Contact.css';
import { MdOutlineMail } from 'react-icons/md';
import Tile from './Tile';

const data = [
  {
    title: 'Email',
    name: 'petitoff@outlook.com',
    link: 'mailto:petitoff@outlook.com',
    linkText: 'Send a mail',
  },
];

const Contact = () => {
  return <section id='contact'>Contact</section>;
};

export default Contact;
