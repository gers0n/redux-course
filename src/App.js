import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with redux</h1>
        </header>
        <div className="Todo-App">
          <Message />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
};

/*
const mapDispatchToProps = {updateCurrent};
const mapStateToProps = (state) => state;
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;
*/

export default App;
