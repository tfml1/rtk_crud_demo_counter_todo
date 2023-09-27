import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer, // now this is available to whole app by provider in index.js
    todo: todoReducer
  }
});
// now lets create a Counter.js component in features/counter folder that we use in app.js in jsx block as component tag <Counter> that will display our buttons for incriment, decrement and count value
