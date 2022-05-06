import React from 'react';
import { BiCheck } from 'react-icons/bi';

const ListService = (props) => {
  return (
    <li>
      <BiCheck className='service__list-icon' />
      <p>{props.text}</p>
    </li>
  );
};

export default ListService;
