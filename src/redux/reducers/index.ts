import { BeerMatchReducer } from './BeerMatchReducer';
import { TopTenReducer } from './TopTenReducer';
import { UserReducer } from './UserReducer';

export const rootReducer = {
  reducer: { UserReducer, BeerMatchReducer, TopTenReducer },
};
