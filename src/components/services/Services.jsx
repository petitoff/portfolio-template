import React from 'react';
import './services.css';
import Card from './Card';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <Card
          title={'UI/UX'}
          texts={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          ]}
        />

        <Card
          title={'Web Development'}
          texts={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          ]}
        />

        <Card
          title={'Content Creation'}
          texts={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          ]}
        />
      </div>
    </section>
  );
};

export default Services;
