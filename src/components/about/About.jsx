import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import AboutCard from './AboutCard';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <AboutCard
              icon={FaAward}
              h5Text={'Experience'}
              smallText={'3+ Years Work'}
            ></AboutCard>

            <AboutCard
              icon={FiUsers}
              h5Text={'Clients'}
              smallText={'200+ Worldwide'}
            ></AboutCard>

            <AboutCard
              icon={VscFolderLibrary}
              h5Text={'Projects'}
              smallText={'80+ Completed'}
            ></AboutCard>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui
            quaerat laboriosam similique dicta natus explicabo libero molestiae
            fugit dolor suscipit, repellat consequuntur dignissimos animi
            inventore eos, ipsum soluta rem!
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
