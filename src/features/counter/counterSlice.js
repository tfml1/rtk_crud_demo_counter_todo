import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // created initial state obj that can have mulrtiple parameters like count:0, abcd:"yyyyy", xyz:"xxxx"
  count: 0
};

// createSlice takes in 3 args, name "counter" is used in state obj creation (state.counter.count)
// initialState created above gives the state obj basic structure, there can also be nested obj to store multiple kinds of data in state like address has post no, street, colony etx.
// reducers (incriment:state.count+=1) are the logic to update the state(that we get here by index.js <provider store={store})
// we export the counterSlice.reducer to store and counterSlice.actions to <counter/>
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // to update store value, take in payload etx
    incriment: (state) => {
      state.count += 1;
    },
    decriment: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementbyamt: (state, action) => {
      // action obj frm inp box that carries a "payload" value
      state.count += action.payload;
    }
  }
});

export const {
  // named export the reducer actions to Counter.js
  incriment,
  decriment,
  reset,
  incrementbyamt
} = counterSlice.actions;

export default counterSlice.reducer;
// in app/store.js-->>   import counterReducer from "../features/counter/counterSlice"
