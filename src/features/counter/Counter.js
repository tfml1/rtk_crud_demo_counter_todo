import { useSelector, useDispatch } from "react-redux"; // to access store states
import { incriment, decriment, reset, incrementbyamt } from "./counterSlice";
// importing named export actions frm counterslice
import React, { useState } from "react";
const Counter = () => {
  const [amnt, setAmnt] = useState(0); // to take in value entered in inp box
  const addvalue = Number(amnt) || 0;
  // this makes sure number entered in inp box is number, not nan or return 0
  const count = useSelector((state) => {
    // state can only be taken as args as its a global state prop recived by the component
    // console.log(state)
    // // console op -->>
    // // counter: Object
    // // count: 5
    return state.counter.count;
  });
  const dispatch = useDispatch();

  const resetall = () => {
    // clbk funct to reset all
    setAmnt(0);
    dispatch(reset());
  };

  return (
    <div>
      <h1>{count}</h1>

      <button // dispatching the "incriment" action
        onClick={() => {
          // clbk function coz disp(inc()) invoked, like passing a value
          dispatch(incriment());
        }}
      >
        incriment
      </button>
      <button
        onClick={() => {
          dispatch(decriment()); // dispatching the "decriment" action
        }}
      >
        decriment
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <br />
      <input
        type="text"
        value={amnt} // this binds the amnt state to the input box so reset all will also change value of inp box to 0
        onChange={(e) => setAmnt(e.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          dispatch(incrementbyamt(addvalue)); //addvalue is the clbk in which amnt will take in current value of amnt state and convert it to "Number(amnt)||0" and amnt updated via inpbox onchange just above
        }} // so basically "amnt" is the "payload" used in counterslice as action.payload in incrementbyamt reducer to update the state
      >
        increment by amnt
      </button>
      <button onClick={resetall}>reset all</button>
      {/* resetall not invoked () like inc()dec()reset() etc coz its a callback funct that resets all value not dispatched action here directly */}
    </div>
  );
};
export default Counter; // import <Counter/> in app.js

// import useselector and usedispatch hook to access and update redux store
