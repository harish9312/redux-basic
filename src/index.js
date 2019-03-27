import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from 'react-redux';
import { incrementValue, decrementValue } from "./actions";
import { store } from "./store";
import "./styles.css";


class App extends React.Component {

  onIncrementClick = () => {
    this.props.increment();
  }

  onDecrementClick = () => {
    this.props.decrement();
  }

  render() {
    return <main>
      Hello Rakhi, how are you??
      <button onClick={this.onIncrementClick} >Increment</button>
      <button onClick={this.onDecrementClick} >Decrement</button>
      <br />
      <h1>{this.props.value}</h1>
    </main>
  }
}

function mapStateToProps(state) {
  return {
    value: state.value
  }
}

function mapDispatchProps(dispatch) {
  return {
    increment: () => dispatch(incrementValue()),
    decrement: () => dispatch(decrementValue()),
  }
}

const AppConnected = connect(mapStateToProps, mapDispatchProps)(App)

const ConnectedApp = () => <Provider store={store}>
  <AppConnected />
</Provider>

const rootElement = document.getElementById("root");
ReactDOM.render(<ConnectedApp />, rootElement);
