// import { configureStore } from '@reduxjs/toolkit'

// import reducer from "./reducers/index";

// export default function configureStore(initialState) {
//   const store = createStore(reducer, initialState);
//   return store;
// }

import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
export const store = configureStore({
  reducer: {
    basket : basketReducer
  }
})