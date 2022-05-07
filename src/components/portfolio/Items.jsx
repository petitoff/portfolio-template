import React from 'react';

const Items = (props) => {
  return (
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={props.img} alt='' />
      </div>
      <h3>{props.title}</h3>

      <div className='portfolio__item-cta'>
        <a href={props.link} className='btn' target='_blank'>
          {props.firstLinkTitle}
        </a>

        <a href={props.link} className='btn btn-primary' target='_blank'>
          {props.secondLinkTitle}
        </a>
      </div>
    </article>
  );
};

export default Items;
