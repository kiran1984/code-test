import React, { Component } from 'react';
import { connect } from 'react-redux';

// import logo from './logo.svg';
import './App.css';

import { searchAction } from './actions/simpleAction'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import {Search} from './util/api';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(searchAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */

  constructor(props) {
    super(props);
    this.state = { businesses: [] };
  }
  simpleAction = (event) => {
  }
  searchYelp = (term, location, sortBy) => {
    //searchAction(term, location, sortBy);

    Search.search(term,location,sortBy).then(businesses => {this.setState({businesses: businesses})});

  }
  render() {
    return (
      <div className="App">
        <h1> Delicious </h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


