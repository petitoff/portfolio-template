import React from 'react';
import './Portfolio.css';
import Items from './Items';
import Img1 from '../../assets/portfolio1.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <Items
          title='This is a portfolio item title'
          img={Img1}
          firstLinkTitle='GitHub'
          secondLinkTitle='Live Demo'
        />

        <Items
          title='This is a portfolio item title'
          img={Img1}
          firstLinkTitle='GitHub'
          secondLinkTitle='Live Demo'
        />

        <Items
          title='This is a portfolio item title'
          img={Img1}
          firstLinkTitle='GitHub'
          secondLinkTitle='Live Demo'
        />
      </div>
    </section>
  );
};

export default Portfolio;
