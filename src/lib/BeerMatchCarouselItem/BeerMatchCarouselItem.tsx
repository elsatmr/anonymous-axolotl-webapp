import React from 'react';
import { IBeer } from '../../utils/types/types';
import styles from './BeerMatchCarouselItem.module.css';

interface Props {
  beer: IBeer;
}

const BeerMatchCarouselItem = ({ beer }: Props) => {
  return (
    <div className={styles.carouselItemContainer}>
      <div className={styles.childContainer}>
        <div className={styles.beerLogo}>🍺</div>
        <h2>{beer.beerName}</h2>
        <div className={styles.abvBrewerContainer}>
          <p>Aroma: {parseInt(beer.aroma) / 2}</p>
          <p>Appearance: {parseInt(beer.appearance) / 2}</p>
          <p>Taste: {parseInt(beer.taste) / 2}</p>
          <p>Mouthfeel: {parseInt(beer.mouthfeel) / 2}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerMatchCarouselItem;
