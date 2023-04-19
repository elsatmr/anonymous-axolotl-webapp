import React from 'react';
import { IBeer } from '../../utils/types/types';
import styles from './BeerMatchCarouselItem.module.css';

interface Props {
  beer: IBeer;
}

const BeerMatchCarouselItem = ({ beer }: Props) => {
  return (
    <div className={styles.carouselItemContainer}>
      <h1>🍺</h1>
      <h2>{beer.beerName}</h2>
      {/* <p>
        <i>{beer.style}</i>
      </p>
      <div className={styles.abvBrewerContainer}>
        <p>{beer.brewerId}</p>
        <p>{beer.abv}</p>
      </div> */}
    </div>
  );
};

export default BeerMatchCarouselItem;
