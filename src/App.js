import React, {Component, Fragment } from 'react';
import Reddit from './container/Reddit';

class App extends Component {
 
  render(){
    return (
      <Fragment>
        <div className="header">
          <h1>Reddits</h1>
        </div>
        <Reddit className="reddit-container"></Reddit>
      </Fragment>
      )
    } 
  }

export default App;
