import React from 'react';
import './experience.css';
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

        <Tile
          title={'Algorithmic'}
          nameTool={['Dynamic Programming', 'Graph', 'Mathematics']}
        />
      </div>
    </section>
  );
};

export default Experience;
