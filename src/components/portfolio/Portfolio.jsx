import React from 'react';
import './Portfolio.css';
import Items from './Items';
import Img1 from '../../assets/portfolio1.jpg';

const data = [
  {
    image: Img1,
    title: 'This is a title',
    github: 'https://github.com/petitoff',
    demo: 'https://google.com',
  },
  {
    image: Img1,
    title: 'This is a title',
    github: 'https://github.com/petitoff',
    demo: 'https://google.com',
  },
];

const Portfolio = () => {
  let id = -1;
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ image, title, github, demo }) => (
          <Items
            key={id++}
            title={title}
            img={image}
            firstLinkTitle='GitHub'
            firstLink={github}
            secondLinkTitle='Live Demo'
            secondLink={demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
