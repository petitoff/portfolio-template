import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { FaUniversity } from 'react-icons/fa';
import { GiMaterialsScience } from 'react-icons/gi';

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
              smallText={'1+ Year Work'}
            ></AboutCard>

            <AboutCard
              icon={FiUsers}
              h5Text={'Courses'}
              smallText={'10+ Completed'}
            ></AboutCard>

            <AboutCard
              icon={VscFolderLibrary}
              h5Text={'Projects'}
              smallText={'3+ Completed'}
            ></AboutCard>

            <AboutCard
              icon={FaUniversity}
              h5Text={'Student'}
              smallText={'Engineering studies'}
            ></AboutCard>

            <AboutCard
              icon={GiMaterialsScience}
              h5Text={'Algorithm'}
              smallText={'+30 resolved problems'}
            ></AboutCard>
          </div>

          <p>
            I am a student of the University of Opole in the IT institute of
            engineering studies. I specialize in creating responsive and
            scalable websites and programs for the windows platform.
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
