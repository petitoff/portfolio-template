import React from 'react';
import ListService from './ListService';

const Card = (props) => {
  return (
    <article className='service'>
      <div className='service__head'>
        <h3>{props.title}</h3>
      </div>
      <div className='service__list'>
        {props.texts.map((t, i) => (
          <ListService key={i} text={t} />
        ))}
      </div>
    </article>
  );
};

export default Card;
