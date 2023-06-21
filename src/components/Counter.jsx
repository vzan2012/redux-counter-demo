import classes from "./Counter.module.css";

// import { Component } from "react";
import {
  useSelector,
  useDispatch,
  // connect
} from "react-redux";
// import {
//   // DECREMENT,
//   // INCREASE,
//   // INCREMENT,
//   // TOGGLE,
//   counterActions,
// } from "../store/counter";

import { counterActions } from "./../store/counter";

// Function Based Component
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: INCREASE, amount: 5 });
    dispatch(counterActions.increase(5));
  };

  const decreaseHandler = () => dispatch(counterActions.decrease(5));

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        {/* <button onClick={incrementHandlerByFive}>Increment by 5</button> */}
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decreaseHandler}>Decrement by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Class Based Component
// class Counter extends Component {
//   constructor() {
//     super();
//   }

//   toggleCounterHandler = () => {};

//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () =>
//       dispatch({
//         type: "INCREMENT",
//       }),
//     decrement: () =>
//       dispatch({
//         type: "DECREMENT",
//       }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
