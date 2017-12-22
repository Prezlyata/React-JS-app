import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '../components/header/header';
import Content from '../components/content/content';


export class App extends Component  {


  render() {
    return (
        <Router>
          <div className="app">
            <ul>
              <li><Link to={'/'}>Header</Link></li>
              <li><Link to={'/Content'}>Content</Link></li>
            </ul>

            <hr/>

            <Switch>
              <Route exact path='/' component={Header}/>
              <Route exact path='/Content' component={Content}/>
            </Switch>
          </div>
        </Router>
    );
  }
}
