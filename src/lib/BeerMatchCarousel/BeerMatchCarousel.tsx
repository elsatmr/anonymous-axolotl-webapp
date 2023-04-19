import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useAppSelector } from '../../redux/hooks';
import BeerMatchCarouselItem from '../BeerMatchCarouselItem/BeerMatchCarouselItem';
import styles from './BeerMatchCarousel.module.css';

const BeerMatchCarousel = () => {
  const beerMatchState = useAppSelector(
    (state) => state.BeerMatchReducer.match
  );
  return (
    <Carousel
      show={3}
      slide={3}
      swiping={true}
      rightArrow={<KeyboardArrowRightIcon className={styles.arrows} />}
      leftArrow={<KeyboardArrowLeftIcon className={styles.arrows} />}
      infinite={false}
      className={styles.carouselContainer}
    >
      {beerMatchState.map((beer) => {
        return (
          <div key={beer.beerName}>
            <React.Fragment key={beer.beerName}>
              <BeerMatchCarouselItem beer={beer} />
            </React.Fragment>
          </div>
        );
      })}
    </Carousel>
  );
};

export default BeerMatchCarousel;
