import { BeerMatchReducer } from './BeerMatchReducer';
import { UserReducer } from './UserReducer';

export const rootReducer = {
  reducer: { UserReducer, BeerMatchReducer },
};
