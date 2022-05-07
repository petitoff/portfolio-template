import React from 'react';
import ExperienceDetail from './ExperienceDetail';

function Tile(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div className='experience__content'>
        {props.nameTool.map((n, i) => (
          <ExperienceDetail key={i} title={n} />
        ))}
      </div>
    </div>
  );
}

export default Tile;
