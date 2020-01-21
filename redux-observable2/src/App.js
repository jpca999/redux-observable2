import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import BeerList from './components/BeersList';

function App(props) {
  console.log('6 - inside App.js  props = ', props.name );
  return (
    <div className="App">
      <BeerList />
    </div>
  );
}

export default connect(state => state.app )(App);
