import React from 'react';
import './experience.css';
import ExperienceDetail from './ExperienceDetail';
import Tile from './Tile';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <Tile
          title={'Frontend Development'}
          nameTool={['HTML', 'CSS', 'JavaScript', 'React.js']}
        />

        <Tile
          title={'Backend Development'}
          nameTool={['Node.js', 'Python', 'C#']}
        />
        {/* <div>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <ExperienceDetail title={'HTML'}></ExperienceDetail>
              <ExperienceDetail title={'CSS'}></ExperienceDetail>
              <ExperienceDetail title={'JavaScript'}></ExperienceDetail>
              <ExperienceDetail title={'React.js'}></ExperienceDetail>
            </div>
          </div>

          <div>
            <h3>Backend Development</h3>
            <div className='experience__content'>
              <ExperienceDetail title={'Node.js'}></ExperienceDetail>
              <ExperienceDetail title={'Python'}></ExperienceDetail>
              <ExperienceDetail title={'C#'}></ExperienceDetail>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default Experience;
