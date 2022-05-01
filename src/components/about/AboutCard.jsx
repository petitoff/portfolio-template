import React from 'react';

const AboutCard = (props) => {
  const TheIcon = props.icon;
  return (
    <div>
      <article className='about__card'>
        <TheIcon className='about__icon' />
        <h5>{props.h5Text}</h5>
        <small>{props.smallText}</small>
      </article>
    </div>
  );
};

export default AboutCard;
