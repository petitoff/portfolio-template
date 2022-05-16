import React from 'react';

function Tile(props) {
  return (
    <article className='contact__option'>
      {props.icon}
      {/* <MdOutlineMail /> */}
      <h4>{props.title}</h4>
      <h5>{props.name}</h5>
      <a href={props.link}>{props.linkText}</a>
    </article>
  );
}

export default Tile;
