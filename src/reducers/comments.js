import { SAVE_COMMENT } from '../actions/types';

// We will save comments into an array of strings.
// The state is initialized as an empty array
export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
