import "./styles.css";
import Counter from "./features/counter/Counter";
import TodoComponent from "./features/todo/TodoComponent";
export default function App() {
  return (
    <div className="App">
      <h3>rtk test</h3>
      <br />
      <br />
      <span style={{ backgroundColor: "rgb(95,77,211)" }}>counter program</span>
      <Counter />
      <br />
      <br />
      <span style={{ backgroundColor: "#954378" }}>todo list program</span>
      <br />
      <TodoComponent />
    </div>
  );
}

//------------------------theory----------------------------------------------------

// // redux is predictable state container for js
// // redux can be used with anything like angular, vue or even js not just react
// //redux helps to manage glogal state of ur app
// // makes it easier to understand when, where, why n how state changing/updating n how will ur app logic behave on those changes
// //redux toolkit is new official opinionated toolkit for redux develoment
// // redux toolkit better than redux coz config is less complicated, redux needed lots of external packages to do something useful, requires too much boilerplate(repeating) code
// // redux toolkit serves as abstraction over old redux , hides the difficult part making sure u  hab good developer experience
// // redux or redux toolkit doesnt depend on any ui library to work but it can use it as we will see here
// // redux toolkit (rtk) the state management library uses react as ui library,
// // to directly use redux is difficult, for that we hab react-redux package
// // which is official react binding library with redux
// //  when to use redux, its a tradeoff bw short n long term productivity(redux adds more code in ur app and is more complicated than other state management like usecontext etx, also adds some indirection to ur code n adds restrictions to what u can n cant do)
// // use when u have large no. of states n u need it in many places in ur app
// // use when ur app state is updated frequently over time or the logic to update that state may be complex
// // if ur app has medium to large size code ase n is worked over by many people
// //
// // (note, like usecontext or react query or react routerdom, this also wraps all components in a "provider" that links it to all components in ur project)
// // // (also, rtk is very similer to usereducer hook in its working principal)

// // npm install redux, redux-toolkit, react-redux (add dependencies)
// //
// // redux helps us avoide prop drilling i.e. sending a prop frm a parent to child to grandchild n so on
// // instead we can store all the states in our app inside a "store"
// // all the other components can access that store with "usesellector" and make changes via "usedispatch" hook and "actions" and "reducers"

// // store- common store for all ur states
// // reducers- objects with key value that acts as controllers that can add remove edit or basically make changes to the store data in states
// // useSelector- it is the hook that can directly talk to the store, if anywhere a state/data is needed, the component will use this hook to ask the store for that data
// // useDispatch- its the hook that is used whenever u wanna update delete etx in the store, usedispatch calls the specific "reducer" to complete that operation

// Problems faced in Redux:

// Redux Toolkit was created to solve these three common problems that we face in Redux.

//     Too much code to configure the store.
//     Writing too much boilerplate code to dispatch actions and store the data in the reducer.
//     Extra packages like Redux-Thunk and Redux-Saga for doing asynchronous actions.

// Benefits of Redux Toolkit(RTK):

//     Easier state management as compared to Redux
//     Boilerplate code for the majority of functions
//     Official recommended SOPE library
//     Wrapper functions are provided which reduce lines of code

// Important function provided by Redux Toolkit:

//     The createStore function in basic Redux is wrapped by configureStore function which automatically provides with middlewares and enhancers.
//     Classic reducer is replaced by createReducer function which makes the code shorter and simpler to understand.
//     The createAction() utility that returns an action creator function.
//     Redux createSlice() function that comes in handy to replace create action and create Reducer functions with a single function.
//     Redux createAsyncThunk() that takes Redux strings as arguments and returns a Promise.
//     Redux createEntityAdapter() utility that helps to perform CRUD operations

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// lets consider a counter app

// create an "app" folder in src
// inside app, create file store.js, import config store frm redux to create ur redux store
// now goto index.js n import store and "provider".... or u can do it here also,
// the point is to wrap all elements in redux provider wrapper like usecontext or query hook so all the elements can get store data frm provider wrapper
/*
import {store} from "./app/store"
import {Provider} from "react-redux" 
// provider wrapper sends "store" attribute that takes in "store" to all wrapped elements in this case the app.js

<StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
*/

// now create a features folder in src that will contain state slices
// inside features, create a "counter" folder that will contain counterSlic
// a slice is the collection of state actions n reducers
// example a blog might hab a slice for post n other slice for comments
// in countersice.js, import createslice frm reduxtlkt

// lets consider how the data flow
//
// we create store.js and using "configureStore" we create a store that contains all the states from all the slices reducers
//   import counterReducer from "../features/counter/counterSlice";
// after which, in index.js, we import the state and the provider that we use to wrap the app.js so all <components/> now have access to this reduxstore state and reducers that it can access vis dispatch n sellectors
// import {store} from "./app/store"
// import {Provider} from "react-redux"
//  <provider store={store}><app/></provider>
// so store is common store forall the different states and reducers, which it gets frm counterslice.js "export default counterSlice.reducer"
// counterslice module uses import createSlice to create state reducer action logic that it exports to Counter.js and "export default counterSlice.reducer" to store.js
// note, counterslice returns reducer actions to <counter/> where ui rendering logic is created and counterSlice.reducer to store which creates the store via configureStore({reducer:{counter:counterReducer}}) then sends it through provider in index.js
//
// so first we created store that takes reducer frm the slice
// the slice exports reducer to store and actions to <counter/> that uses sellector and dispatch hook to update and render the state from the store, (store already sent it via provider in index.js),
// the state update logic are in reducers- actions present inside the slice-(createslice) that it named exported to <counter/> which <counter/> imports and uses dispatch n sellector to updaten render state value
// so frm store->index.js provider-> <provider store={store}> to all components so store state already available frm store.js to index.js to app.js to both <counter/> and countersice.js
// frm counterslice -> store             (counterSlice.reducer)
// frm counterslice -> <counter/>        (counterSlice.actions)
// frm store -> <counter/>               (state via provider)
// frm store -> counterslice             (state via provider)

// finally in app.js, we reciving <Counter /> to render on window
//
/*
ai explaination

    store.js: This file sets up the Redux store using the configureStore function from @reduxjs/toolkit. It defines a reducer for the counter state slice, which is imported from the counterSlice module.
    app.js: This file imports the Counter component from the features/counter directory, and renders it inside a div element.
    index.js: This file creates a React root element using createRoot from react-dom/client, and renders the App component inside it. It also imports the store from store.js and wraps the App component with the Provider component from react-redux, passing the store as a prop.
    counterSlice.js: This file creates a Redux slice for the counter state using the createSlice function from @reduxjs/toolkit. It defines an initial state object, and three reducers: incriment, decriment, and reset. It also defines an action creator for each reducer, and exports the reducer and actions objects.
    counter.js: This file imports the incriment, decriment, reset, and incrementbyamt actions from the counterSlice module, and uses them to update the state of the counter reducer. It also uses the useSelector and useDispatch hooks from react-redux to access the Redux store and dispatch actions.

Overall, this code sets up a Redux store with a single state slice for the counter state, and defines a few actions and reducers to update the state. The Counter component uses the useSelector and useDispatch hooks to access the Redux store and dispatch actions to update the state.



ai explaination step by step

step explanation of how Redux Toolkit works in the provided example,

    The counterSlice.js file creates a Redux slice for the counter state using the createSlice function from @reduxjs/toolkit.
    The counterSlice object defines an initial state object with a count property set to 0.
    The counterSlice object also defines three reducers: incriment, decriment, and reset.
    The incriment reducer increments the count property by 1.
    The decriment reducer decrements the count property by 1.
    The reset reducer sets the count property to 0.
    The store.js file creates a Redux store using the configureStore function from @reduxjs/toolkit.
    The store object is passed a single reducer - the counterSlice reducer.
    The store object is used to dispatch actions to update the counter state.
    The counter.js file imports the useSelector and useDispatch hooks from @reduxjs/toolkit.
    The useSelector hook is used to access the current counter state from the Redux store.
    The useDispatch hook is used to dispatch actions to update the counter state.
    The ounter.js file creates a React component that renders a button and a display of the current count.
    When the button is clicked, the incriment or decriment action is dispatched to update the count property.
    The reset action is dispatched to set the count property to 0.
    The useSelector hook is used to update the component state with the new count value.
    The component re-renders with the updated count display.
    The counterSlice reducer updates the count property in the Redux store.
    The store object is used to persist
    The store object is used to persist the updated state of the counter reducer.
    The counter component uses the useSelector hook to retrieve the current count value from the Redux store.
    The counter component uses the useDispatch hook to dispatch actions to update the count value.
    The counter component re-renders with the updated count value.
    The App component imports the counter component and renders it in the application.
    The App component uses the useSelector hook to retrieve the current count value from the Redux store.
    The App component uses the useDispatch hook to dispatch actions to update the count value.
    The App component re-renders with the updated count value.
    The application starts with the initial count value of 0.
    The user clicks the "Increment" button, which dispatches the incriment action.
    The counterSlice reducer updates the count property by 1.
    The store object persists the updated state of the counter reducer.
    The counter component re-renders with the updated count value of 1.
    The user clicks the "Decrement" button, which dispatches the decriment action.
    The counterSlice reducer updates the count property by -1.
    The store object persists the updated state of the counter reducer.
    The counter component re-renders with the updated count value of 0.
    The user clicks the "Reset" button, which dispatches the reset action.
    The counterSlice reducer sets the count property to 0.
    The store object persists the updated state of the counter reducer.
    The counter component re-renders with the updated count value of 0.
    The application continues to run with the updated count value of 0

data flow -- flow chart-->>

           +---------------+
           |  User Interface|
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  React Component|
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  useSelector()|
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  useDispatch()|
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  Action Creator|
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  Action        |
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  Redux Store   |
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  Redux Dispatch|
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  Redux Middleware|
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  Redux Reducer |
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  Redux State   |
           +---------------+
                  |
                  |
                  v
           +---------------+
           |  React Component|
          +---------------+
                |
                  |
                  v
           +---------------+
           |  Render        |  
           +---------------+          
 */

// lets also create a todo app using same store and a todoslice
/* state console.log, notice that state obj has now two sub objs frm two different slices n reducers
{counter: Object, todo: Object}

counter: Object

    count: 0

todo: Object

todos: Array(1)

0: Object

id: 1

text: "test todo
*/
