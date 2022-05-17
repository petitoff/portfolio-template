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
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {data.map(({ icon, title, name, link, linkText }) => (
            <Tile
              icon={icon}
              title={title}
              name={name}
              link={link}
              linkText={linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
