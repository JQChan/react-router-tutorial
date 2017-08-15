import React from 'react';

import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink';

export default React.createClass({
  render () {
    return (
      <div>
          <h1>Hello, React Router!</h1>
          <ul role="nav">
            <li><Link to="/about" activeStyle={{ color: 'red' }} activeClassName="active">About</Link></li>
            <li><Link to="/repos" activeStyle={{ color: 'red' }} activeClassName="active">Repos</Link></li>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          </ul>
          
          {this.props.children}
      </div>
    )
  }
})