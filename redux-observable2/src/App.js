import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
// import BeerList from './components/BeerList';
import Beers from './components/Beers';

function App(props) {
  console.log('6 - inside App.js  props = ', props.name );
  return (
    <div className="App">
      <Beers />
    </div>
  );
}

export default connect(state => state.app )(App);
