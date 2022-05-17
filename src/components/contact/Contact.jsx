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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wt8n81p',
      'template_dm8ux88',
      form.current,
      '5bEM8t9g5W4i2nAl-'
    );

    e.target.reset();
  };

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

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
