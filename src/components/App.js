import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppShell from './AppShell';
import '../App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <AppShell />
      </Router>

    );
  }
}

export default App;
