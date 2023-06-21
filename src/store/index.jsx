import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

export const INCREMENT = "increment";
export const INCREASE = "increase";
export const DECREMENT = "decrement";
export const TOGGLE = "toggle";

// const counterReducer = (state = initialCounterState, action) => {
//   if (action.type === INCREMENT) {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === INCREASE) {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   // if (action.type === "INCREMENT_BY_FIVE") {
//   //   return { counter: state.counter + 5 };
//   // }
//   if (action.type === DECREMENT) {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === TOGGLE) {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// For multiple reducers
// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer
//   }
// })

// Store
// const store = configureStore({ reducer: counterSlice.reducer });

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
