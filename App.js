import React, { Component } from "react";
import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default App;
