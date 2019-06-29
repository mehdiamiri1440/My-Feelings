import React, { Component } from "react";
import { Provider } from "react-redux";
import Languages from "./src/languages";
import store from "./src/redux/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Languages />
      </Provider>
    );
  }
}
export default App;
