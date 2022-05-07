import React from 'react';

const Items = (props) => {
  return (
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={props.img} alt='' />
      </div>
      <h3>{props.title}</h3>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        ratione voluptas aspernatur a vitae at, exercitationem ullam aliquid
        veritatis sequi, explicabo <br />
        autem beatae vel soluta eos delectus amet eveniet. Eligendi.
      </p> */}

      <div className='portfolio__item-cta'>
        <a
          href={props.firstLink}
          rel='noreferrer'
          className='btn'
          target='_blank'
        >
          {props.firstLinkTitle}
        </a>

        <a
          href={props.secondLink}
          rel='noreferrer'
          className='btn btn-primary'
          target='_blank'
        >
          {props.secondLinkTitle}
        </a>
      </div>
    </article>
  );
};

export default Items;
