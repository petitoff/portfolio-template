import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import ExperienceDetail from './ExperienceDetail';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <ExperienceDetail title={'HTML'}></ExperienceDetail>
            <ExperienceDetail title={'CSS'}></ExperienceDetail>
            <ExperienceDetail title={'JavaScript'}></ExperienceDetail>
            <ExperienceDetail title={'React.js'}></ExperienceDetail>
          </div>
        </div>

        {/* Backend section */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <ExperienceDetail title={'Node.js'}></ExperienceDetail>
            <ExperienceDetail title={'MongoDB'}></ExperienceDetail>
            <ExperienceDetail title={'Python'}></ExperienceDetail>
            <ExperienceDetail title={'MySQL'}></ExperienceDetail>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
