import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the tickets we have!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/MultikinoKrakowBilet.jpg'
              text='Check out this movie in Krakow!'
              label='Krakow'
              path='/products'
            />
            <CardItem
              src='images/telelotoBilietas.jpg'
              text='Selling teleloto ticket for 0.5e'
              label='Vilnius'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/KOKbilietas.jpg'
              text='Seeling KOK ticket for 20e. Original price 30e'
              label='Vilnius'
              path='/products'
            />
            <CardItem
              src='images/PerkuZalgirisRytas.jpg'
              text='I would buy a ticket against Zalgiris and Rytas for tomorrow game'
              label='Kaunas'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
