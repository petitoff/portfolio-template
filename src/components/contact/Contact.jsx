import React from 'react';
import './Contact.css';
import { MdOutlineMail } from 'react-icons/md';
import Tile from './Tile';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const data = [
  {
    icon: <MdOutlineMail />,
    title: 'Email',
    name: 'petitoff@outlook.com',
    link: 'mailto:petitoff@outlook.com',
    linkText: 'Send a mail',
  },
  {
    icon: <MdOutlineMail />,
    title: 'Email',
    name: 'petitoff@outlook.com',
    link: 'mailto:petitoff@outlook.com',
    linkText: 'Send a mail',
  },
  {
    icon: <MdOutlineMail />,
    title: 'Email',
    name: 'petitoff@outlook.com',
    link: 'mailto:petitoff@outlook.com',
    linkText: 'Send a mail',
  },
];

const Contact = () => {
};

export default Contact;
