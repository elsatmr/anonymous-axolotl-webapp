import { BeerMatchReducer } from './BeerMatchReducer';
import { BeerSearchReducer } from './BeerSearchReducer';
import { TopTenReducer } from './TopTenReducer';
import { UserReducer } from './UserReducer';

export const rootReducer = {
  reducer: { UserReducer, BeerMatchReducer, TopTenReducer, BeerSearchReducer },
};
