// src/store.js
import { createStore } from 'redux';

/** ACTION TYPES */
export const ADD_1 = 'ADD_1';
export const ADD_2 = 'ADD_2';
export const REMOVE_1 = 'REMOVE_1';
export const REMOVE_2 = 'REMOVE_2';
export const RESET = 'RESET';
export const UPDATE_HISTORY = 'UPDATE_HISTORY'; // remove by index
export const CLEAR_ALL = 'CLEAR_ALL';

/** STATE */
const initialState = {
  count: 0,
  history: [], // e.g. [1, -2, 'RESET', 2]
};

function computeCountFromHistory(history) {
  let total = 0;
  for (const item of history) {
    if (item === 'RESET') total = 0;
    else if (typeof item === 'number') total += item;
  }
  return total;
}

/** REDUCER */
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_1:    return { ...state, count: state.count + 1, history: [...state.history, 1] };
    case ADD_2:    return { ...state, count: state.count + 2, history: [...state.history, 2] };
    case REMOVE_1: return { ...state, count: state.count - 1, history: [...state.history, -1] };
    case REMOVE_2: return { ...state, count: state.count - 2, history: [...state.history, -2] };
    case RESET:    return { ...state, count: 0,              history: [...state.history, 'RESET'] };
    case CLEAR_ALL:return { ...state, count: 0,              history: [] };
    case UPDATE_HISTORY: {
      const i = action.payload;
      if (i < 0 || i >= state.history.length) return state;
      const nextHistory = [...state.history.slice(0, i), ...state.history.slice(i + 1)];
      const nextCount = computeCountFromHistory(nextHistory); // ✅ 보너스 충족
      return { ...state, count: nextCount, history: nextHistory };
    }
    default: return state;
  }
}

const store = createStore(reducer);
export default store;
