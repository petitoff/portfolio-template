import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const ExperienceDetail = (props) => {
  return (
    <div>
      <article className='experience__details'>
        <BsPatchCheckFill />
        <div>
          <h4>{props.title}</h4>
          <small className='text-light'>Experienced</small>
        </div>
      </article>
    </div>
  );
};

export default ExperienceDetail;
