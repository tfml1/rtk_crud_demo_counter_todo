import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";
// provider wrapper sends "store" attribute that takes in "store" to all wrapped elements in this case the app.js

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// now goto index.js n import store and "provider"....
// the point is to wrap all elements in redux provider wrapper like usecontext or query hook so all the elements can get store data frm provider wrapper
